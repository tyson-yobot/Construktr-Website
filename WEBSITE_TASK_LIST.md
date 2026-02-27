# CONSTRUKTR Website - Task List & Required Items

**Last Updated:** February 2, 2026
**Project:** CONSTRUKTR Marketing Website

---

## Summary

This document outlines all outstanding tasks, missing assets, and items that need completion for the CONSTRUKTR website.

---

## 1. PLACEHOLDER IMAGES (Priority: HIGH)

### 1.1 Contractor Testimonial Photos
**File:** `client/src/components/contractor-social-proof.tsx`
**Current:** Using `/api/placeholder/60/60` placeholder URLs
**Required:** 3 real contractor headshot photos

| Item | Dimensions | Format | Description |
|------|------------|--------|-------------|
| Contractor 1 Photo | 60x60 px | JPG/PNG | Mike Chen - HVAC contractor headshot |
| Contractor 2 Photo | 60x60 px | JPG/PNG | Sarah Johnson - Plumbing contractor headshot |
| Contractor 3 Photo | 60x60 px | JPG/PNG | David Martinez - Electrical contractor headshot |

---

## 2. INTEGRATION SETUP (Priority: HIGH)

### 2.1 Stripe Payment Integration
**Files:** `server/stripe.ts`, `server/routes.ts`
**Status:** Partially configured
**Tasks:**
- [ ] Configure production Stripe secret key
- [ ] Set up proper success/cancel URLs with actual domain
- [ ] Test payment flow end-to-end
- [ ] Configure webhook for payment confirmation

### 2.2 Slack Notifications
**File:** `server/slack.ts`
**Status:** Simulated/Mock implementation
**Tasks:**
- [ ] Connect actual Slack webhook URL
- [ ] Configure notification channels for leads and payments
- [ ] Test notification delivery

### 2.3 Email Integration
**File:** `server/slack.ts` (email functions)
**Status:** Placeholder - no actual emails sent
**Tasks:**
- [ ] Integrate email service (SendGrid is installed)
- [ ] Configure email templates
- [ ] Set up transactional email flows

---

## 3. GOOGLE DRIVE CONNECTION (Priority: HIGH)

**Current Status:** Token refresh failed - "Account Restricted" error
**Issue:** The current connection may be using wrong Google account (not tyson@construktr.ai)

**Tasks:**
- [ ] Disconnect current Google Drive connection
- [ ] Reconnect with tyson@construktr.ai account
- [ ] Verify access permissions

---

## 4. CONTENT & COPY (Priority: MEDIUM)

### 4.1 Blog Content
**Path:** `/blog`
**Tasks:**
- [ ] Add real blog posts (currently may be placeholder content)
- [ ] Add blog post images

### 4.2 Promo/Download Data
**File:** `server/routes/promo.ts`
**Status:** Using mock/hardcoded data
**Tasks:**
- [ ] Replace mock promo data with database-driven content
- [ ] Add real promotional materials

---

## 5. TECHNICAL FIXES (Priority: MEDIUM)

### 5.1 React Warnings
**Console Errors:**
- Invalid prop `data-replit-metadata` supplied to React.Fragment in ComparisonTable component
- Invalid hook call warnings on some pages

**Tasks:**
- [ ] Fix ComparisonTable component Fragment props issue
- [ ] Investigate and resolve invalid hook call warnings

### 5.2 Missing Assets (404 Errors)
**Observed:** Some preloaded fonts/images returning 404
**Tasks:**
- [ ] Audit all asset references
- [ ] Remove unused preload declarations or add missing assets

---

## 6. FEATURE COMPLETION (Priority: MEDIUM)

### 6.1 Modal Accessibility
**File:** `client/src/components/accessibility-improvements.tsx`
**Issue:** Escape key to close modal not fully implemented
**Tasks:**
- [ ] Complete focus trap implementation
- [ ] Add Escape key handler for modal dismissal

### 6.2 Video Demo Section
**File:** `client/src/components/video-demo-section.tsx`
**Tasks:**
- [ ] Verify video playback works correctly
- [ ] Add fallback for video loading failures

---

## 7. SEO & ANALYTICS (Priority: LOW)

### 7.1 SEO Verification
**File:** `client/src/components/SEOHead.tsx`
**Tasks:**
- [ ] Verify OG image specifications are correct
- [ ] Complete SEO testing checklist
- [ ] Validate structured data with Google

### 7.2 Analytics Events
**Tasks:**
- [ ] Verify all conversion events are firing
- [ ] Test UTM attribution tracking
- [ ] Confirm Facebook/Google pixels are working

---

## 8. SCREENSHOTS NEEDED FOR DOCUMENTATION

### App Screenshots (for marketing pages)
| Screenshot | Dimensions | Purpose |
|------------|------------|---------|
| Home hero phone mockup | 420x880 px | Homepage hero section |
| Quote generation screen | 420x880 px | Demo section |
| Scheduling calendar view | 420x880 px | Smart scheduling demo |
| Payment/invoice screen | 420x880 px | Payment flow demo |
| Dashboard overview | 420x880 px | Features showcase |

### Website Page Screenshots (for this audit)
| Page | Desktop (px) | Mobile (px) | Status |
|------|--------------|-------------|--------|
| Homepage | 1920x1080 | 375x812 | Captured |
| Pricing | 1920x1080 | 375x812 | Captured |
| Features | 1920x1080 | 375x812 | Captured |
| About | 1920x1080 | 375x812 | Captured |
| Demos | 1920x1080 | 375x812 | Captured |
| Get Started | 1920x1080 | 375x812 | Captured |

---

## 9. EXISTING ASSETS AVAILABLE

The following assets are already uploaded in `attached_assets/`:
- CONSTRUKTR logos (multiple versions)
- Automate AI logos
- Various contractor/app images (IMG_4328-IMG_4345 series)
- Website keyword documents

---

## PRIORITY SUMMARY

| Priority | Category | Count |
|----------|----------|-------|
| HIGH | Placeholder Images, Integrations, Google Drive | 3 |
| MEDIUM | Content, Technical Fixes, Features | 3 |
| LOW | SEO, Analytics | 1 |

---

## NEXT STEPS

1. **Immediate:** Reconnect Google Drive with tyson@construktr.ai
2. **This Week:** Replace placeholder contractor photos
3. **This Week:** Configure Stripe production keys
4. **Ongoing:** Complete integration testing
