import { Router } from "express";

const router = Router();

// Mock data for promo downloads remaining
// In production, this would connect to a database or external service
let promoData = {
  remainingDownloads: 237, // Dynamic count
  isActive: true,
  totalLimit: 250,
  startDate: '2025-01-01',
  endDate: '2025-02-28'
};

// GET /api/promo/downloads-remaining
router.get("/downloads-remaining", async (req, res) => {
  try {
    // Simulate occasional API unavailability for fallback testing
    if (Math.random() < 0.1) {
      return res.status(503).json({ error: "Service temporarily unavailable" });
    }

    res.json(promoData);
  } catch (error) {
    console.error("Error fetching promo data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/promo/track-download (for updating count)
router.post("/track-download", async (req, res) => {
  try {
    if (promoData.isActive && promoData.remainingDownloads > 0) {
      promoData.remainingDownloads -= 1;
      
      // Deactivate promo when limit reached
      if (promoData.remainingDownloads <= 0) {
        promoData.isActive = false;
      }
    }

    res.json({ success: true, remainingDownloads: promoData.remainingDownloads });
  } catch (error) {
    console.error("Error tracking download:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { router as promoRoutes };