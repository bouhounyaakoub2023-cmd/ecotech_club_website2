/**
 * ============================================
 * ECOCLUB — SCRIPT DE PERSONNALISATION
 * ============================================
 * Remplace automatiquement les placeholders [CLE] par les valeurs
 * définies dans club-config.js
 */

(function() {
  'use strict';

  function buildPlaceholderMap(config) {
    const map = {};

    if (!config) return map;

    // Club
    if (config.club) {
      map['CLUB_DESCRIPTION'] = config.club.description || '';
      map['CLUB_NAME'] = config.club.name || 'EcoClub';
      map['CLUB_LOGO'] = config.club.logo || '';
      map['CLUB_TAGLINE'] = config.club.tagline || '';
      map['HERO_TITLE'] = config.club.heroTitle || '';
      map['HERO_SUBTITLE'] = config.club.heroSubtitle || '';
      map['HERO_IMAGE'] = config.club.heroImage || '';
      map['HERO_IMAGE_2'] = config.club.heroImage2 || '';
      map['HERO_IMAGE_3'] = config.club.heroImage3 || '';
    }

    // Vision & Mission
    map['VISION_TEXT'] = config.vision || '';
    map['MISSION_TEXT'] = config.mission || '';

    // Values
    if (config.values && Array.isArray(config.values)) {
      config.values.forEach((v, i) => {
        const n = i + 1;
        map[`VALUE_${n}`] = v.title || '';
        map[`VALUE_${n}_DESC`] = v.description || '';
      });
    }

    // Stats
    if (config.stats) {
      map['STAT_1'] = String(config.stats.members ?? 0);
      map['STAT_2'] = String(config.stats.eventsOrganized ?? 0);
      map['STAT_3'] = String(config.stats.yearsActive ?? 0);
    }

    // Departments
    if (config.departments && Array.isArray(config.departments)) {
      config.departments.forEach((d, i) => {
        const n = i + 1;
        map[`DEPT_${n}_NAME`] = d.name || '';
        map[`DEPT_${n}_DESC`] = d.description || '';
      });
    }

    // Team
    if (config.team && Array.isArray(config.team)) {
      config.team.forEach((m, i) => {
        const n = i + 1;
        map[`MEMBER_${n}_NAME`] = m.name || '';
        map[`MEMBER_${n}_ROLE`] = m.role || '';
        map[`MEMBER_${n}_BIO`] = m.bio || '';
        map[`MEMBER_${n}_IMAGE`] = m.image || '';
        map[`MEMBER_${n}_LINKEDIN`] = m.linkedin || '#';
        map[`MEMBER_${n}_INSTAGRAM`] = m.instagram || '#';
      });
    }

    // Events (past: 1-3, upcoming: 4-5)
    const allEvents = [
      ...(config.events?.past || []),
      ...(config.events?.upcoming || [])
    ];
    allEvents.forEach((e, i) => {
      const n = i + 1;
      map[`EVENT_${n}_TITLE`] = e.title || '';
      map[`EVENT_${n}_DATE`] = e.date || '';
      map[`EVENT_${n}_LOCATION`] = e.location || '';
      map[`EVENT_${n}_DESC`] = e.description || '';
      map[`EVENT_${n}_IMAGE`] = e.image || '';
    });

    // Contact & Social
    if (config.contact) {
      map['CONTACT_EMAIL'] = config.contact.email || '';
      map['CONTACT_PHONE'] = config.contact.phone || '';
      map['CONTACT_ADDRESS'] = config.contact.address || '';
      if (config.contact.social) {
        map['SOCIAL_INSTAGRAM'] = config.contact.social.instagram || '#';
        map['SOCIAL_LINKEDIN'] = config.contact.social.linkedin || '#';
        map['SOCIAL_FACEBOOK'] = config.contact.social.facebook || '#';
        map['SOCIAL_TWITTER'] = config.contact.social.twitter || '#';
      }
    }

    // Form webhook - stocké pour script.js
    if (config.form?.webhookUrl && config.form.webhookUrl.trim()) {
      window.ECOCLUB_WEBHOOK_URL = config.form.webhookUrl.trim();
    }

    return map;
  }

  function replacePlaceholders(map) {
    const walk = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        for (const [key, value] of Object.entries(map)) {
          text = text.replace(new RegExp(`\\[${key}\\]`, 'g'), value);
        }
        node.textContent = text;
        return;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        // Replace in attributes
        for (const attr of ['href', 'src', 'alt', 'content', 'value', 'data-target']) {
          const val = node.getAttribute(attr);
          if (val) {
            let newVal = val;
            for (const [key, value] of Object.entries(map)) {
              newVal = newVal.replace(new RegExp(`\\[${key}\\]`, 'g'), value);
            }
            if (newVal !== val) node.setAttribute(attr, newVal);
          }
        }

        // Skip script and style
        if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return;

        for (const child of node.childNodes) {
          walk(child);
        }
      }
    };

    walk(document.body);
    if (document.head) {
      walk(document.head);
    }
  }

  function init() {
    const config = window.CLUB_CONFIG;
    if (!config) {
      console.warn('EcoClub: club-config.js not loaded. Placeholders will not be replaced.');
      return;
    }

    const map = buildPlaceholderMap(config);
    replacePlaceholders(map);

    // Update form webhook in script (stored in global for form submission)
    if (map['N8N_WEBHOOK_URL'] && map['N8N_WEBHOOK_URL'] !== '[N8N_WEBHOOK_URL]') {
      window.ECOCLUB_WEBHOOK_URL = map['N8N_WEBHOOK_URL'];
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
