<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header>
    <nav class="nav">
      <a href="#home" class="logo"><span class="logo-mark"></span>Reuter Development</a>
      <div class="nav-links" :class="{ open: menuOpen }">
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#about" @click="closeMenu">About Us</a>
        <a href="#contact" @click="closeMenu">Contact</a>
        <a href="#contact" class="nav-cta" @click="closeMenu">Get Started</a>
      </div>
      <button
        class="menu-toggle"
        aria-label="Toggle menu"
        :aria-expanded="menuOpen"
        @click="toggleMenu"
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  </header>
  <div class="horizon"></div>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 252, 255, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.logo {
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-mark {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(180deg, var(--primary) 50%, var(--primary-dark) 50%);
  flex-shrink: 0;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
}

.nav-links a {
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-muted);
  transition: color 0.15s ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--primary-dark);
}

.nav-cta {
  background: var(--primary-dark);
  color: var(--white) !important;
  padding: 10px 20px;
  border-radius: var(--radius);
  font-weight: 600 !important;
  font-size: 0.9rem !important;
  transition: background 0.15s ease, transform 0.15s ease;
}

.nav-cta:hover,
.nav-cta:focus-visible {
  background: var(--primary);
  transform: translateY(-1px);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
}

.horizon {
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--primary) 20%, var(--primary) 80%, transparent);
  opacity: 0.6;
}

@media (max-width: 760px) {
  .nav-links {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 24px;
    gap: 18px;
    border-bottom: 1px solid var(--border);
    transform: translateY(-150%);
    transition: transform 0.2s ease;
  }

  .nav-links.open {
    transform: translateY(0);
  }

  .menu-toggle { display: flex; }
}
</style>
