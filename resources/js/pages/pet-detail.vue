<template>
  <div class="container">
    <header class="store-header py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <router-link class="store-header-logo text-dark" :to="{ path: '/' }">
            {{ $appName }}
          </router-link>
        </div>
      </div>
    </header>
    <item-detail />
  </div>
</template>
