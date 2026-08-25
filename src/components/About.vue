<template>
  <section class="about" id="about">
    <div class="about-grid">
      <div>
        <span class="about-label">About Us</span>
        <h2>Built on a simple idea, done properly.</h2>
        <p>This section is where you tell your story — what you do, why you started, and why it matters to the people you serve. Keep it honest and specific; that's what people remember.</p>
        <p>Replace this placeholder copy with two or three short paragraphs about your background, your approach, and what makes working with you different.</p>
        <div class="stats">
          <div>
            <div class="stat-num">120+</div>
            <div class="stat-label">Projects delivered</div>
          </div>
          <div>
            <div class="stat-num">98%</div>
            <div class="stat-label">Client satisfaction</div>
          </div>
          <div>
            <div class="stat-num">5 yrs</div>
            <div class="stat-label">In business</div>
          </div>
        </div>
      </div>
      <div class="about-visual">
        <div class="about-visual-inner">Horizon</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 100px 24px;
}

.about-grid {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary-dark);
  margin-bottom: 12px;
  display: block;
}

.about h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  margin-bottom: 18px;
}

.about p {
  color: var(--text-muted);
  margin-bottom: 16px;
  font-size: 1.02rem;
}

.about-visual {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: 16px;
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.about-visual::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, var(--primary) 55%, var(--primary) 58%, transparent 58%);
  opacity: 0.5;
}

.about-visual-inner {
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  color: var(--primary-dark);
  font-size: 3rem;
  z-index: 1;
}

.stats {
  display: flex;
  gap: 40px;
  margin-top: 28px;
}

.stat-num {
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  color: var(--primary-dark);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}

@media (max-width: 760px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .about-visual { order: -1; }
}
</style>
