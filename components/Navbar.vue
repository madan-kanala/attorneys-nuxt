<template>
  <div class="navigation-container wf-section">
    <div class="nav-contain w-row">
      <div class="column-2 w-col w-col-5 w-col-stack nav-bar-group">
        <NuxtLink to="/" class="nav-bar-logo">
          <img src="assets/images/logo.ce898954.png" loading="lazy" alt="" />
        </NuxtLink>
        <div class="w-nav-button" @click="burgerToggle">
          <div class="w-icon-nav-menu"></div>
        </div>
        <div
          v-show="burgerOpen"
          id="w-nav-overlay-0"
          class="w-nav-overlay"
          data-wf-ignore=""
          style="display: block; height: 4042.22px"
        >
          <nav role="navigation" class="w-nav-menu" data-nav-menu-open="">
            <NuxtLink
              to="/"
              class="nav-link w-nav-link w--nav-link-open"
              style="max-width: 728px"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="nav-link w-nav-link w--nav-link-open"
              style="max-width: 728px"
            >
              About
            </NuxtLink>
            <NuxtLink
              to="/resources"
              class="nav-link w-nav-link w--nav-link-open"
              style="max-width: 728px"
            >
              Resources
            </NuxtLink>
            <NuxtLink
              to="/faq"
              class="nav-link w-nav-link w--nav-link-open"
              style="max-width: 728px"
            >
              FAQ
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="nav-link w-nav-link w--nav-link-open"
              style="max-width: 728px"
            >
              Contact
            </NuxtLink>
          </nav>
        </div>
      </div>
      <div class="column w-col w-col-7 w-col-stack w-col-small-small-stack">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          class="navbar w-nav"
        >
          <div class="container w-container nav-menu-responsive">
            <nav role="navigation" class="w-nav-menu">
              <NuxtLink to="/">
                <a class="nav-link w-nav-link">Home</a>
              </NuxtLink>
              <NuxtLink to="/about">
                <a class="nav-link w-nav-link">About</a>
              </NuxtLink>
              <NuxtLink to="/resources">
                <a class="nav-link w-nav-link">Resources</a>
              </NuxtLink>
              <NuxtLink to="/faq">
                <a class="nav-link w-nav-link">FAQ</a>
              </NuxtLink>
              <NuxtLink to="/contact">
                <a aria-current="page" class="nav-link w-nav-link">Contact</a>
              </NuxtLink>
              <button
                class="nav-link w-nav-link"
                style="background: none"
                @click="showModal = true"
              >
                <img
                  src="assets/images/search.png"
                  loading="lazy"
                  alt=""
                  width="20px"
                />
              </button>
              <a
                href="https://facebook.com/VERMILIONLAWYERS/"
                aria-current="page"
                class="nav-link w-nav-link"
              >
                <img
                  src="assets/images/Facebook-logo-gray.png"
                  loading="lazy"
                  alt=""
                  width="20px"
                />
              </a>
            </nav>
          </div>
        </div>
        <div class="w-row mobile-nav-hidden">
          <div class="sub-phone left w-col w-col-3 w-col-stack">
            <div
              data-hover="true"
              data-delay="0"
              class="w-dropdown"
              @mouseover="mouseOver"
              @mouseout="mouseOut"
              @click="toggle"
            >
              <div class="dropdown-toggle w-dropdown-toggle">
                <div class="icon w-icon-dropdown-toggle"></div>
                <div class="text-block-4">Real Estate</div>
              </div>
              <nav v-show="isOpen" id="myDropdown" class="w-dropdown-list">
                <div class="w-dropdown-list-sub">
                  <NuxtLink to="/practise-area" style="text-decoration: none">
                    <p class="w-dropdown-link">Commercial Closings</p>
                  </NuxtLink>
                  <NuxtLink to="/practise-area" style="text-decoration: none">
                    <p class="w-dropdown-link">Title Insurance</p>
                  </NuxtLink>
                  <NuxtLink to="/practise-area" style="text-decoration: none">
                    <p class="w-dropdown-link">Title Search</p>
                  </NuxtLink>
                </div>
                <div class="w-dropdown-list-sub">
                  <NuxtLink to="/practise-area" style="text-decoration: none">
                    <p class="w-dropdown-link">Residential Closings</p>
                  </NuxtLink>
                  <NuxtLink to="/practise-area" style="text-decoration: none">
                    <p class="w-dropdown-link">Estate Planning</p>
                  </NuxtLink>
                </div>
              </nav>
            </div>
          </div>
          <div class="sub-phone sub-phone-number w-col w-col-4 w-col-stack">
            <a href="tel:337-893-3423" class="phone-number">337-893-3423</a>
          </div>
          <div class="site-toggle w-col w-col-5 w-col-stack">
            <Nuxt-link to="/att-index">
              <a class="toggle-button w-button">
                <p class="sub-switch">Attorneys At Law</p>
                <hr size="2" width="80px" />
              </a>
            </Nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <SavedModal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import SavedModal from '~/components/SavedModal.vue'
export default {
  components: {
    SavedModal,
  },
  data() {
    return {
      isOpen: false,
      burgerOpen: false,
      showModal: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
      document.getElementById('myDropdown').classList.toggle('show')
      document.getElementById('myDropdown').classList.add('w--open')
    },
    mouseOver() {
      this.isOpen = true
      document.getElementById('myDropdown').classList.toggle('show')
      document.getElementById('myDropdown').classList.add('w--open')
    },
    mouseOut() {
      this.isOpen = false
    },
    burgerToggle() {
      this.burgerOpen = !this.burgerOpen
      document.getElementById('myDropdown').classList.toggle('show')
      document.getElementById('myDropdown').classList.add('w--open')
    },
  },
}
</script> 