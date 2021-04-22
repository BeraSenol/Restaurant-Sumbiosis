export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Restaurant Sumbiosis",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/main.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxtjs/color-mode", "@nuxtjs/svg"],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        "bootstrap-vue/nuxt",
        "nuxt-i18n"
    ],
    // Nuxt-i18n config: https://i18n.nuxtjs.org/
    i18n: {
        locales: ["en", "nl"],
        defaultLocale: "en",
        strategy: "prefix",
        vueI18n: {
            fallbackLocale: "nl",
            messages: {
                en: {
                    nav: {
                        home: "Home",
                        menu: "Menu",
                        blog: "Blog",
                        our_story: "Our Story",
                        contact: "Contact",
                        reservation: "Reservation"
                    }
                },
                nl: {
                    nav: {
                        home: "Home",
                        menu: "Menu",
                        blog: "Blog",
                        our_story: "Ons Verhaal",
                        contact: "Contact",
                        reservation: "Reservatie"
                    }
                }
            }
        }
    },



    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
};