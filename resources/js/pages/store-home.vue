<template>
  <div class="container">
    <page-header />
    <category-navbar />
    <main role="main" class="container">
      <div class="row">
        <transition>
          <keep-alive>
            <item-list />
          </keep-alive>
        </transition>
      </div>
    </main>
  </div>
</template>
