/* ===== SCROLL REVEAL EFFECT ===== */
.section,
.skill,
.project-card,
.timeline-item {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.active-reveal {
  opacity: 1;
  transform: translateY(0);
}
