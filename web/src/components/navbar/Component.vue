<template>
  <nav class="bg-gray-800 flex-shrink">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 aria-hidden="true"
                 v-if="!showMobileMenuRef"
                 @click="showMobileMenuRef = true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="block h-6 w-6"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 aria-hidden="true"
                 v-if="showMobileMenuRef"
                 @click="showMobileMenuRef = false">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a href="#" class="unselected-link sm-navbar-link">Rules</a>
              <a href="#" class="unselected-link sm-navbar-link">FAQ</a>
              <a href="#" class="unselected-link sm-navbar-link">News</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <span class="text-sm font-semibold bg-white text-gray-900 py-3 px-4 rounded-lg"
                  v-if="selfNicknameRef">
              {{ selfNicknameRef }}
               <!-- "hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"> -->
            </span>
            <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
            -->
            <!-- <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu"> -->
            <!--   <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a> -->
            <!--   <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a> -->
            <!--   <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
    -->
    <div v-if="showMobileMenuRef">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="unselected-link xs-navbar-link">Rules</a>
        <a href="#" class="unselected-link xs-navbar-link">FAQ</a>
        <a href="#" class="unselected-link xs-navbar-link">News</a>
        <!-- <a href="#" class="unselected-link xs-navbar-link">Team</a> -->
        <!-- <a href="#" class="unselected-link xs-navbar-link">Projects</a> -->
        <!-- <a href="#" class="unselected-link xs-navbar-link">Calendar</a> -->
      </div>
    </div>
  </nav>
</template>
<script src="./script"></script>
<style>
.navbar-link {
  @apply block px-3 py-2 rounded-md font-medium;
}
.xs-navbar-link {
  @apply navbar-link text-base;
}
.sm-navbar-link {
  @apply navbar-link text-sm;
}
.selected-link {
  @apply bg-gray-900 text-white;
}
.unselected-link {
  @apply text-gray-300 hover:bg-gray-700 hover:text-white;
}
</style>
