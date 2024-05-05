<template>
  <AboutView />
  
  <div class="banner-1">
    <!-- NavBar -->
    <nav
      class="container px-6 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <div class="relative w-28">
          <img class="NavBar-me mb-5" 
          src="./assets/logo.png" 
          alt="image logo"/> 
        </div>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="menu-button"><a href="#MESPROJETS">MES PROJETS</a></li>
        <li class="menu-button"><a href="#APROPOS">A PROPOS</a></li>
        <li class="menu-button"><a href="#CONTACT">CONTACT</a></li>
      </ul>
    </nav>
    <!-- End Navbar -->

    <div class="flex items-center">
      <div class="w-11/12 space-y-5 md:space-y-10">
        <h3
          class="hello-button w-fit md:py-3 md:px-5 py-1 px-2 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-amandine" style="color: #384b47;">
          <span style="color: #d3e8d6;">✌🏾 Bonjour</span>, 
        </h3> 
        <h1
          class="3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-bold leading-tight" style="color: #384b47;">
          JULIEN GEOFFROY
          <br/>Développeur WEB - Débutant.
        </h1>
        
      </div>
      <div class="w-8/12 flex justify-end">
        <img
          class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
          src="./assets/me.jpg"
          alt="photo profil"
        />
      </div>  
    </div>
  </div>

  <div class="banner-3 space-y-10 pb-20" id="MESPROJETS">
    <h3 class="heading3 my-5">MES PROJETS :  PORTFOLIO</h3>
    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Curriculum Vitae</h4>
        <p class="pr-12">
         Réalisation d'un CV en utilisant le HTML, CSS.
        </p>
        <a href="./CV.pdf" download="CV">
          <button>Télécharger CV !</button>
        </a>
      
      </div>
      <div class="card-image">
        <img 
        class="object-cover w-full h-72 md:h-96" src="./assets/CV.png" alt="image CV" />  
      </div>
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Cahier Des Charge</h4>
        <p class="pr-12">
          Cahier Des Charges pour un site internet de la Socketterie.
        </p>
        <a href="./cahier-des-charges.pdf" download="CDC">
          <button>Télécharger CDC !</button>
        </a>
    
      </div>
      <div class="card-image">
        <img
        class="object-cover w-full h-48 md:h-96" src="./assets/cdc.png" alt="image CDC">
      </div>
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title">Espace Commentaire</h4>
        <p class="pr-12">
          Creation d'un Espace Commentaire.
        </p>
      </div>
      <div class="card-image">
        <img
        class="object-cover w-full h-72 md:h-96" src="./assets/EC.png" alt="image EC">
      </div>
    </div>
  </div>

  <div class="banner-2 md:flex items-center md:justify-evenly" id="APROPOS">
    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
      <h4 class="project-title item" style="color: #384b47;">A PROPOS </h4>
      <p class="font-amandine" style="color: #384b47;">
          Je m'appelle Julien Geoffroy,j'ai 35 ans. Je travail acctuellement dans l'agro-alimentaire comme réceptionneur et controleur des matière d'embalage les produits a l'entreprise Maison Monterrad à feillens 01. 
        <br/>
        J'ai decider de faire cette formation pour apprendre ce metier, j'ai toujours étè pasionné par tout ce qui se ratache a l'informatique, j'aimé beaucoup sa. Ne pouvant pas faire se genre formation à l'école ou autre étant plus jeune c'est pour sa que j'ai décidé de me lancer dans cette formation.
      </p>

    </div>
  </div>

  <div class="banner-1 flex h-full items-center" id="CONTACT">
    <div class="w-7/12 p-12" style="color: #384b47;">
      <h2 class="md:text-6xl text-2xl mb-5 font-bold">POUR ME CONTACTER!</h2>
      <a class="text-2xl" style="color: #384b47;"></a>
        <ul>
          <li><a href="mailto:djugeoffroy@gmail.com">djugeoffroy@gmail.com</a></li>
        </ul>
      </div>    
    </div>
  <div class="w-5/12 pr-28">
  <div class="flex flex-wrap justify-end gap-2">
   
    </div>  
  </div>
  <footer>
		<span>
			<a href="https://www.facebook.com/DJU01?locale=fr_FR" target="_blank"><img src="./assets/facebook.png" alt="Logo FB" style="max-width: 50px; margin:6px;"></a>
			<a href="https://twitter.com/djugeoffroy01" target="_blank"><img src="./assets/twitter.png" alt="Logo Tw"  style="max-width: 50px; margin: 6px;"></a>
			<a href="https://www.linkedin.com/in/julien-geoffroy-99a750201/" target="_blank"><img src="./assets/linkedin.png" alt="Logo Lk"  style="max-width: 50px; margin: 6px;"></a>
			<a href="https://github.com/juliengeoffroy" target="_blank"><img src="./assets/github.png" alt="Logo GitHub" style="max-width: 50px; margin:6px;"></a>
      <small>Copyright © 2024</small>
		</span>
	</footer>		
</template>

<script setup>
  import AboutView from './views/AboutView.vue';
</script>
