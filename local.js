const recipes = [
    { id: 1, name: 'Pasta al Pomodoro', ingredients: ['pasta', 'pomodoro', 'basilico', 'olio'], category: 'pranzo', calories: 350 },
    { id: 2, name: 'Insalata di Pollo', ingredients: ['pollo', 'insalata', 'pomodoro', 'maionese'], category: 'pranzo', calories: 400 },
    
    // Colazione (50-100kcal)
    { id: 3, name: 'Yogurt con Miele e Noci', ingredients: ['yogurt', 'miele', 'noci'], category: 'colazione', calories: 90 },
    { id: 4, name: 'Smoothie di Frutta', ingredients: ['frutta', 'latte', 'miele'], category: 'colazione', calories: 95 },
    
    // Colazione (100-200kcal)
    { id: 5, name: 'Pancakes con Sciroppo', ingredients: ['farina', 'latte', 'uova', 'sciroppo'], category: 'colazione', calories: 150 },
    { id: 6, name: 'Toast con Avocado', ingredients: ['pane', 'avocado', 'sale', 'pepe'], category: 'colazione', calories: 180 },
    
    // Pranzo (200-300kcal)
    { id: 7, name: 'Quinoa con Verdure', ingredients: ['quinoa', 'zucchine', 'peperoni', 'pomodorini'], category: 'pranzo', calories: 250 },
    { id: 8, name: 'Riso con Pollo e Verdure', ingredients: ['riso', 'pollo', 'broccoli', 'carote'], category: 'pranzo', calories: 280 },
    
    // Pranzo (300-400kcal)
    { id: 9, name: 'Couscous con Ceci', ingredients: ['couscous', 'ceci', 'pomodorini', 'cetrioli'], category: 'pranzo', calories: 350 },
    { id: 10, name: 'Insalata di Tonno', ingredients: ['tonno', 'lattuga', 'pomodori', 'olive'], category: 'pranzo', calories: 360 },
    
    // Cena (200-300kcal)
    { id: 11, name: 'Zuppa di Lenticchie', ingredients: ['lenticchie', 'carote', 'sedano', 'cipolla'], category: 'cena', calories: 220 },
    { id: 12, name: 'Filetti di Pesce al Forno', ingredients: ['filetti di pesce', 'limone', 'prezzemolo'], category: 'cena', calories: 270 },
    
    // Cena (300-400kcal)
    { id: 13, name: 'Pollo alla Griglia con Verdure', ingredients: ['pollo', 'peperoni', 'zucchine', 'olio'], category: 'cena', calories: 320 },
    { id: 14, name: 'Melanzane Ripiene', ingredients: ['melanzane', 'carne macinata', 'pomodoro', 'formaggio'], category: 'cena', calories: 350 },
    
    // Proteico (50-100kcal)
    { id: 15, name: 'Albume d’Uovo alla Griglia', ingredients: ['albume d’uovo'], category: 'proteico', calories: 60 },
    { id: 16, name: 'Ricotta Magra con Frutti di Bosco', ingredients: ['ricotta magra', 'frutti di bosco'], category: 'proteico', calories: 90 },
    
    // Proteico (100-200kcal)
    { id: 17, name: 'Petto di Pollo alla Griglia', ingredients: ['petto di pollo', 'sale', 'pepe'], category: 'proteico', calories: 150 },
    { id: 18, name: 'Omelette con Spinaci', ingredients: ['uova', 'spinaci', 'sale', 'pepe'], category: 'proteico', calories: 180 },
    
    // 50-100kcal
    { id: 19, name: 'Carote Crude con Hummus', ingredients: ['carote', 'hummus'], category: '50-100kcal', calories: 90 },
    { id: 20, name: 'Cetrioli con Yogurt', ingredients: ['cetrioli', 'yogurt', 'aneto'], category: '50-100kcal', calories: 85 },
    
    // 100-200kcal
    { id: 21, name: 'Frutta Mista', ingredients: ['frutta'], category: '100-200kcal', calories: 120 },
    { id: 22, name: 'Popcorn al Naturale', ingredients: ['popcorn'], category: '100-200kcal', calories: 150 },
    
    // 200-300kcal
    { id: 23, name: 'Insalata di Ceci e Avocado', ingredients: ['ceci', 'avocado', 'pomodoro', 'lattuga'], category: '200-300kcal', calories: 220 },
    { id: 24, name: 'Spaghetti di Zucchine con Salsa di Pomodoro', ingredients: ['zucchine', 'pomodoro', 'basilico'], category: '200-300kcal', calories: 270 },
    
    // 300-400kcal
    { id: 25, name: 'Riso Basmati con Verdure', ingredients: ['riso basmati', 'carote', 'piselli', 'cipolla'], category: '300-400kcal', calories: 320 },
    { id: 26, name: 'Chili con Carne', ingredients: ['carne macinata', 'fagioli', 'pomodoro', 'peperoni'], category: '300-400kcal', calories: 350 },
    
    // 400-500kcal
    { id: 27, name: 'Lasagna Vegetariana', ingredients: ['lasagna', 'melanzane', 'zucchine', 'salsa di pomodoro', 'formaggio'], category: '400-500kcal', calories: 450 },
    { id: 28, name: 'Polpettone di Manzo', ingredients: ['manzo', 'pane grattugiato', 'uova', 'formaggio'], category: '400-500kcal', calories: 480 },

    // 500-600kcal
    { id: 29, name: 'Pizza Margherita', ingredients: ['farina', 'mozzarella', 'pomodoro', 'basilico'], category: '500-600kcal', calories: 550 },
    { id: 30, name: 'Hamburger con Patatine', ingredients: ['hamburger', 'pane', 'patatine'], category: '500-600kcal', calories: 600 },

    // 600-700kcal
    { id: 31, name: 'Tagliatelle al Tartufo', ingredients: ['tagliatelle', 'tartufo', 'burro', 'parmigiano'], category: '600-700kcal', calories: 650 },
    { id: 32, name: 'Pollo alla Cacciatora', ingredients: ['pollo', 'pomodoro', 'olive', 'cipolla'], category: '600-700kcal', calories: 680 },

    // 700+ kcal
    { id: 33, name: 'Grigliata Mista di Carne', ingredients: ['carne mista', 'verdure grigliate'], category: '700+', calories: 750 },
    { id: 34, name: 'Paella', ingredients: ['riso', 'frutti di mare', 'pollo', 'peperoni', 'piselli'], category: '700+', calories: 800 },

    // Lowcarb
    { id: 35, name: 'Insalata di Avocado e Salmone', ingredients: ['avocado', 'salmone affumicato', 'cetrioli', 'limone'], category: 'lowcarb', calories: 320 },
    { id: 36, name: 'Frittata di Spinaci e Formaggio', ingredients: ['uova', 'spinaci', 'formaggio', 'cipolla'], category: 'lowcarb', calories: 350 }
];

function apriTimer(){
    window.location.href = "timer.html"
}
function apriLista(){
    window.location.href ="lista.html"
}