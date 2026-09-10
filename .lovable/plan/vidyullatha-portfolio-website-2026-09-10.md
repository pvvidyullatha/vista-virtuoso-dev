# Vidyullatha Portfolio Website

## Goal
Build a polished, single-page freelance portfolio that positions Parigi Vijaya Vidyullatha as an experienced React/UI developer with a growing creative-design practice. The uploaded image will guide the layered composition and bold profile presentation, but will not be embedded.

## What will be built
- Sticky, accessible navigation with smooth section links, mobile menu, theme toggle, “Let’s Work Together,” and CV placeholder action.
- High-impact hero with a replaceable professional-photo placeholder, restrained motion, availability message, and three clear actions.
- About and factual career statistics without inflated claims.
- Categorized, scannable skills presentation without invented proficiency percentages.
- Chronological experience and education timelines.
- Three clearly labeled professional-experience project showcases with generic, confidentiality-safe interface mockups.
- Client-focused services, with digital invitations and banners visually separated from core development services.
- “Beyond Code” gallery using honest “Coming Soon” placeholders for future creative work.
- Trust-building “Why Work With Me” section and repeated, restrained contact prompts.
- Conversion-focused contact area with direct email and WhatsApp links, a validated project inquiry form, and “Coming Soon” social profiles.
- Minimal professional footer with the supplied 2026 copyright.

## Visual direction
- Vibrant Hybrid Tech + Creative: deep navy, crisp light slate, electric violet, and vibrant cyan.
- Reference-inspired composition: oversized typography, layered interface motifs, a prominent framed profile area, and bold black/near-black actions.
- Light and dark themes using semantic color tokens, with saved preference and no layout shift.
- Inter/Manrope-style professional typography, compact radii, clean borders, and selective gradient accents.
- Purposeful motion only: initial hero reveal, restrained section reveals, card lift, timeline progression, and reduced-motion support.

## Interaction and accessibility
- Keyboard-operable navigation, menu, theme switch, form, and links with visible focus states.
- Semantic headings and landmarks, strong contrast, descriptive labels, 44px mobile targets, and reduced-motion handling.
- Contact fields validated in the browser; submission will open a prepared email because no message-delivery service is requested.
- WhatsApp and email inputs will be safely encoded before opening external links.

## Technical details
- Implement as reusable React sections and shared controls within the existing TanStack Start project.
- Use Tailwind v4 semantic tokens in the global design system; no hardcoded page colors.
- Use CSS animation and React state rather than adding a large animation dependency.
- Add unique home-page metadata, social metadata, and structured professional-profile data where appropriate.
- Keep the profile and project imagery slots data-driven for straightforward future replacement.
- Verify the page at desktop and mobile sizes, including interactions, theme persistence, layout overflow, and browser errors.

## Current limitations kept explicit
- The CV action will be marked as coming soon until a resume PDF is supplied.
- Social/freelance profiles and creative gallery items remain “Coming Soon.”
- Project visuals will be generic representations, not confidential employer screenshots.
- The contact form will use the visitor’s email app; persistent submissions or automated email delivery require a later Cloud-backed integration.
