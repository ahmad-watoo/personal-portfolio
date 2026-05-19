import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GradientText } from "@/components/ui";

// ─────────────────────────────────────────────────────────────
//  404 Not Found page
//  Shown for any route that doesn't exist.
// ─────────────────────────────────────────────────────────────

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: "1.5rem",
        backgroundColor: "var(--color-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "40%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* 404 number */}
      <Typography
        sx={{
          fontSize: { xs: "6rem", md: "10rem" },
          fontWeight: 900,
          letterSpacing: "-0.06em",
          lineHeight: 1,
          mb: "0.5rem",
          background:
            "linear-gradient(135deg, var(--color-border) 0%, var(--color-border-strong) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          userSelect: "none",
        }}
      >
        404
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: "1rem",
          letterSpacing: "-0.03em",
        }}
      >
        Page <GradientText>not found</GradientText>
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: "2.5rem",
          maxWidth: "380px",
          lineHeight: 1.75,
        }}
      >
        The page you're looking for doesn't exist or may have been moved.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => navigate(-1)}
          variant="outlined"
          startIcon={<ArrowLeft size={16} />}
          sx={{
            borderRadius: "10px",
            fontWeight: 600,
            px: "1.5rem",
            borderColor: "var(--color-border-strong)",
            color: "text.primary",
          }}
        >
          Go Back
        </Button>
        <Button
          onClick={() => navigate("/")}
          variant="contained"
          startIcon={<Home size={16} />}
          sx={{
            borderRadius: "10px",
            fontWeight: 700,
            px: "1.5rem",
            background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
            boxShadow: "none",
            "&:hover": { boxShadow: "0 8px 24px rgba(99,102,241,0.35)" },
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
}
