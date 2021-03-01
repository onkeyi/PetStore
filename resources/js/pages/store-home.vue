<template>
  <div class="container">
    <HomePageHeader></HomePageHeader>
    <PetCategoryNavbar></PetCategoryNavbar>
    <main role="main" class="container">
      <div class="row">
        <transition>
          <keep-alive>
            <PetList></PetList>
          </keep-alive>
        </transition>
      </div>
    </main>
  </div>
</template>
