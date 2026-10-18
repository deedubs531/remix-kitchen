// Shop items: x = what the item contains (meat, fish, dairy, egg, gluten, nuts, honey),
// sw = what to buy instead when that's off the menu ("" = just leave it out),
// core = the kit is built around it, so there's no swap
const KITS = [
{ id:"stew", name:"Coconut Chickpea Stew", tag:"Your favourite",
  why:"Built on Alison Roman's spiced chickpea stew, rich with coconut milk. One pot, better every day.",
  sources:[{title:"Spiced Chickpea Stew With Coconut and Turmeric", by:"Alison Roman · NYT Cooking", url:"https://cooking.nytimes.com/search?q=alison+roman+spiced+chickpea+stew", note:"Make a full pot on Sunday. Top each bowl with a spoon of yogurt."}],
  prep:["Make the full pot of stew (about 1 hr)","Toast pita, cool, store in a bag","Cook a pot of rice","Boil 4 eggs to jammy (6½ min), peel","Wash mint and spinach, wrap in paper towel"],
  meals:[{n:"The classic", h:"Reheat stew, top with yogurt, mint and a crushed toasted pita."},
         {n:"Stew rice bowl", h:"Stew over rice with a halved jammy egg and chilli flakes."},
         {n:"Hummus swoosh", h:"Spread hummus on a plate, spoon thick stew on top, scatter olives and lemon."},
         {n:"Green stew", h:"Wilt two handfuls of spinach into the stew, finish with feta and lemon."},
         {n:"Curry-style bowl", h:"Stew over rice with chilli crisp, lime and extra coconut milk stirred in."}],
  shop:[{i:"2 cans chickpeas"},{i:"2 cans full-fat coconut milk"},{i:"Onion, garlic, ginger"},{i:"Ground turmeric, red pepper flakes"},{i:"Vegetable broth"},{i:"Bunch of greens (chard or kale) + bag of spinach"},{i:"Mint, lemons, limes"},
        {i:"Pita",x:"gluten",sw:"Gluten-free flatbread or crackers"},{i:"Plain yogurt",x:"dairy",sw:"Coconut yogurt"},{i:"Hummus"},{i:"Feta",x:"dairy",sw:"Dairy-free feta"},{i:"Eggs",x:"egg",sw:""},{i:"Rice, olives, chilli crisp"}]},

{ id:"goddess", name:"Green Goddess Grain Bowls", tag:"New · 4.8★ sauce",
  why:"A tray of roasted baby bellas and globe eggplant, a pot of farro, your market tofu and a jar of herby tahini green goddess. Mix and match all week.",
  sources:[{title:"Vegan Green Goddess Dressing", by:"Suzy Karadsheh · The Mediterranean Dish", rating:"4.8★ from 39 votes", url:"https://www.themediterraneandish.com/vegan-green-goddess-dressing/", note:"Tahini, lemon and a big pile of herbs. Keeps 5 days in a jar."},
           {title:"Pressed tofu, plain or spiced", by:"The Woks of Life", url:"https://thewoksoflife.com/pressed-tofu-plain-or-spiced", note:"Background on the marinated pressed tofu you buy at Asian markets. It's ready to eat, so just slice it."}],
  prep:["Blend the green goddess (parsley, cilantro or basil, dill, scallion, garlic, tahini, lemon)","Roast 1 lb halved baby bellas and 1 cubed globe eggplant at 425°F, 25–30 min, with olive oil, salt, cumin","Cook 1½ cups farro (about 25 min), salt it well","Massage chopped kale with lemon and a pinch of salt","Slice the marinated tofu; quick-pickle a red onion"],
  meals:[{n:"The goddess bowl", h:"Farro, kale, roasted mushrooms and eggplant, tofu, a big spoon of green goddess."},
         {n:"Warm farro skillet", h:"Fry farro and mushrooms in a hot pan, wilt in spinach, top with a fried egg and goddess."},
         {n:"Goddess wrap", h:"Pita or lavash with hummus, eggplant, tofu, kale and pickled onion."},
         {n:"Eggplant toast", h:"Mash roasted eggplant on toast, add sliced tofu, goddess and chilli flakes."},
         {n:"Big kale salad", h:"Kale, chickpeas, mushrooms, toasted seeds, goddess thinned with lemon."}],
  shop:[{i:"1 lb baby bella mushrooms"},{i:"1 globe eggplant"},{i:"Marinated pressed tofu (Asian market)"},{i:"Farro",x:"gluten",sw:"Quinoa"},{i:"Bunch of kale + bag of spinach"},{i:"Parsley, cilantro or basil, dill, scallions"},{i:"Tahini, 3 lemons, garlic, red onion"},{i:"1 can chickpeas"},
        {i:"Pita or lavash",x:"gluten",sw:"Gluten-free wraps"},{i:"Bread",x:"gluten",sw:"Gluten-free bread"},{i:"Eggs",x:"egg",sw:""},{i:"Hummus"},{i:"Pumpkin or sunflower seeds"}]},

{ id:"garlic", name:"Garlic Eggplant & Spiced Tofu", tag:"New · 4.97★",
  why:"Japanese eggplant in glossy garlic sauce plus a 15-minute stir-fry of the marinated pressed tofu you already buy. Both from The Woks of Life.",
  sources:[{title:"Chinese Eggplant with Garlic Sauce", by:"The Woks of Life", rating:"4.97★ from 114 votes", url:"https://thewoksoflife.com/chinese-eggplant-garlic-sauce/", note:"Use vegetarian oyster sauce and skip the pork, or swap in finely chopped shiitake. Keeps 4 days."},
           {title:"Stir-Fried Pressed Tofu with Peppers and Black Beans", by:"The Woks of Life", url:"https://thewoksoflife.com/stir-fried-pressed-tofu-peppers-black-beans/", note:"15 minutes with store-bought spiced tofu, fermented black beans and long hot peppers."}],
  prep:["Mix the garlic sauce ahead (it speeds up the cook)","Cook the eggplant in garlic sauce, adding chopped shiitake if you like (about 40 min)","Stir-fry the pressed tofu with peppers and black beans (15 min)","Cook a big pot of jasmine rice","Wash spinach or bok choy for wilting"],
  meals:[{n:"Eggplant over rice", h:"Reheat the eggplant, spoon over rice, scatter scallions."},
         {n:"Tofu & peppers bowl", h:"Rice, pressed tofu stir-fry, a handful of spinach wilted in the hot pan."},
         {n:"Garlic noodles", h:"Toss noodles with eggplant and its sauce, wilt in bok choy, add chilli oil."},
         {n:"Tofu fried rice", h:"Day-old rice, an egg, chopped tofu and greens in a hot pan."},
         {n:"Lettuce cups", h:"Chop eggplant and tofu together, spoon into lettuce leaves with rice."}],
  shop:[{i:"1 lb Japanese eggplant"},{i:"8 oz marinated pressed tofu"},{i:"6–8 fresh shiitake (optional)"},{i:"Long hot peppers, garlic, ginger, scallions, dried chillies"},
        {i:"Vegetarian oyster sauce",x:"gluten",sw:"Gluten-free vegetarian oyster sauce"},{i:"Light & dark soy sauce",x:"gluten",sw:"Tamari"},{i:"Rice vinegar"},{i:"Shaoxing wine",x:"gluten",sw:"Dry sherry"},
        {i:"Fermented black beans, cornstarch, sesame oil"},{i:"Spinach or bok choy, butter lettuce"},{i:"Jasmine rice, chilli oil"},{i:"Noodles",x:"gluten",sw:"Rice noodles"},{i:"Eggs",x:"egg",sw:""}],
  tip:"Cut eggplant just before cooking; it browns quickly once sliced."},

{ id:"bulgogi", name:"King Oyster Bulgogi", tag:"New · mushroom-forward",
  why:"Shredded king oyster mushrooms in a sweet, gingery bulgogi marinade with Asian pear. Chewy and meaty, and great in bowls, wraps and bibimbap.",
  sources:[{title:"Sweet and Spicy Korean Bulgogi Mushrooms", by:"Jeeca Uy · VegNews, from Vegan Asian", url:"https://vegnews.com/vegan-recipes/vegan-korean-bulgogi-mushrooms", note:"1 lb king oysters, shredded. About 10 minutes on the stove once marinated."},
           {title:"5-Minute Sautéed King Oyster Mushrooms", by:"A Couple Cooks", url:"https://www.acouplecooks.com/king-oyster-mushrooms/", note:"Sesame oil, garlic, tamari and mirin. A quick extra batch for mid-week."}],
  prep:["Shred 1 lb king oysters with a fork and marinate (soy, brown sugar, gochujang, sesame oil, garlic, ginger, grated Asian pear)","Cook the bulgogi mushrooms with onion until glossy (10 min)","Make spinach namul: blanch spinach, squeeze, toss with sesame oil, garlic, salt","Cook a pot of short-grain rice","Slice scallions and cucumber"],
  meals:[{n:"Bulgogi bowl", h:"Rice, mushrooms, kimchi, cucumber, scallions, sesame."},
         {n:"Lettuce wraps", h:"Lettuce leaves, a spoon of rice, mushrooms, gochujang, kimchi."},
         {n:"Bibimbap", h:"Rice, mushrooms, spinach namul, a fried egg and gochujang. Stir it all up."},
         {n:"Bulgogi noodles", h:"Noodles tossed with mushrooms, sesame oil and wilted greens."},
         {n:"Kimchi fried rice", h:"Cold rice, chopped kimchi and mushrooms in a hot pan, egg on top."}],
  shop:[{i:"1 lb king oyster mushrooms"},{i:"Asian pear, onion, garlic, ginger, scallions"},{i:"Soy sauce",x:"gluten",sw:"Tamari"},{i:"Gochujang",x:"gluten",sw:"Gluten-free gochujang"},{i:"Brown sugar, toasted sesame oil, mirin"},
        {i:"Big bag of spinach, butter lettuce, cucumber"},{i:"Kimchi",x:"fish",sw:"Vegan kimchi (no fish sauce)"},{i:"Short-grain rice, sesame seeds"},{i:"Noodles",x:"gluten",sw:"Sweet potato glass noodles"},{i:"Eggs",x:"egg",sw:""}]},

{ id:"miso", name:"Miso Eggplant & Mushroom Rice", tag:"New · Japanese",
  why:"Nasu dengaku (miso-glazed eggplant) with a one-pot shiitake rice. Like your sushi orders, but cosy and vegetable-led, with your tofu for protein.",
  sources:[{title:"Miso Glazed Eggplant (Nasu Dengaku)", by:"Yumiko · RecipeTin Japan", rating:"4.75★ from 4 votes", url:"https://japan.recipetineats.com/miso-glazed-eggplant-nasu-dengaku/", note:"20 minutes. The miso sauce keeps in the fridge, so make extra for tofu too."},
           {title:"Takikomi Gohan (Japanese Mixed Rice)", by:"Nami · Just One Cookbook", url:"https://www.justonecookbook.com/takikomi-gohan-japanese-mixed-rice/", note:"Shiitake-flavoured rice cooked in dashi. Freeze portions; the author says it dries out in the fridge."}],
  prep:["Make the dengaku miso sauce (miso, egg yolk, sugar, sake, mirin), cool and jar it","Cook the takikomi gohan with shiitake and add sliced baby bellas; freeze in single portions","Score and pan-fry 2 Japanese eggplants (or 1 globe in discs)","Sauté extra shiitake with soy and mirin","Blanch spinach for goma-ae; slice the marinated tofu"],
  meals:[{n:"Dengaku plate", h:"Miso eggplant, a bowl of mushroom rice, spinach with sesame."},
         {n:"Mushroom rice & tofu", h:"Microwave a rice portion, top with tofu, shiitake and spinach."},
         {n:"Miso eggplant don", h:"Chopped dengaku eggplant over rice with a jammy egg and scallions."},
         {n:"Miso-glazed tofu", h:"Spread leftover miso sauce on tofu slices, broil 3 min, serve with rice and greens."},
         {n:"Crispy rice pan", h:"Fry mushroom rice in a hot pan until crisp, wilt in spinach, top with an egg."}],
  shop:[{i:"2 Japanese eggplants (or 1 globe)"},{i:"Dried shiitake + fresh shiitake + baby bellas"},{i:"Marinated pressed tofu"},{i:"Miso, sake, mirin, sugar"},{i:"Soy sauce",x:"gluten",sw:"Tamari"},
        {i:"Short-grain rice"},{i:"Dashi",x:"fish",sw:"Kombu (for a plant-based dashi)"},{i:"Spinach, scallions, sesame seeds"},{i:"Carrot"},{i:"Eggs",x:"egg",sw:""}],
  tip:"Eat the eggplant within 3 days; the frozen rice portions last a month."},

{ id:"poached", name:"Ginger Scallion Chicken", tag:"Gentle",
  why:"Chicken thighs gently poached with ginger, then spooned with a sizzling ginger-scallion oil. Mild, clean and soothing, and the poaching water becomes your broth for the week.",
  sources:[{title:"Poached Chicken with Scallion Ginger Sauce", by:"The Woks of Life", url:"https://thewoksoflife.com/poached-chicken-scallion-ginger-sauce/", note:"35 minutes. Works with 4 thighs. Save every drop of the poaching liquid."},
           {title:"Hainan Chicken Rice", by:"Christie at Home", url:"https://christieathome.com/blog/recipe-hainan-chicken-rice/", note:"Rice cooked in broth with ginger and garlic. Uses skin-on boneless thighs, ready in about 25 minutes."}],
  prep:["Poach 6 chicken thighs with ginger slices and a scallion; rest in the pot off the heat, then slice","Strain and keep the poaching liquid (about 4 cups); chill in a jar","Make ginger-scallion oil: minced ginger, scallion, salt, then pour over hot oil","Cook jasmine rice in some of the broth with ginger and garlic","Wash bok choy and slice cucumbers"],
  meals:[{n:"Chicken rice plate", h:"Ginger rice, sliced chicken, cucumber, a spoon of ginger-scallion oil."},
         {n:"Bok choy broth bowl", h:"Heat broth, drop in bok choy for 1 minute, add chicken and a little rice."},
         {n:"Quick jook", h:"Simmer leftover rice in broth for 10 minutes until soft, top with chicken and scallion."},
         {n:"Scallion oil noodles", h:"Toss thin noodles with ginger-scallion oil and soy, top with chicken and cucumber."},
         {n:"Egg drop soup", h:"Bring broth to a simmer, drizzle in a beaten egg, add chicken and spinach."}],
  shop:[{i:"6 chicken thighs (bone-in or boneless, skin-on)",x:"meat",core:1},{i:"Big knob of ginger, 2 bunches scallions, garlic"},{i:"Jasmine rice"},{i:"Low-sodium chicken broth (for the rice)",x:"meat",core:1},
        {i:"Light soy sauce",x:"gluten",sw:"Tamari"},{i:"Neutral oil, sugar"},{i:"Baby bok choy, spinach, cucumbers"},{i:"Thin wheat noodles",x:"gluten",sw:"Thin rice noodles"},{i:"Eggs",x:"egg",sw:""}],
  tip:"The poaching broth keeps 4 days in the fridge. Freeze half if you won't use it in time."},

{ id:"noodlesoup", name:"Chinese Chicken Noodle Soup", tag:"Gentle",
  why:"A clear, gingery chicken broth with thin noodles and greens. Seasoned with just ginger, scallion, Shaoxing wine and salt, so it's easy on your stomach.",
  sources:[{title:"Chinese Chicken Noodle Soup", by:"The Woks of Life", url:"https://thewoksoflife.com/?p=73017", note:"Sear bone-in thighs or leg quarters, then simmer an hour. Chili oil is an optional garnish; skip it."},
           {title:"Simple Chicken Soup with Lots of Ginger", by:"Cathy Erway · TASTE", url:"https://tastecooking.com/recipes/simple-chicken-soup-with-lots-of-ginger/", note:"For a bigger batch: a whole 6-inch piece of ginger, carrots and greens."}],
  prep:["Sear 6 bone-in chicken thighs skin-side down until golden","Simmer with water, ginger slices, scallion, a splash of Shaoxing wine and a carrot for 1 hour; season with salt and white pepper","Pull out the chicken, shred it, and keep it separate from the broth","Cook a pot of rice for the rice-soup nights","Wash bok choy and spinach"],
  meals:[{n:"Classic noodle soup", h:"Boil thin noodles, add hot broth, shredded chicken and bok choy for the last minute."},
         {n:"Rice in broth", h:"Ladle hot broth over a bowl of rice, add chicken and spinach. Simple and soothing."},
         {n:"Dumpling soup", h:"Cook frozen chicken or veg dumplings in the broth, add greens and scallion."},
         {n:"Ginger chicken jook", h:"Simmer rice in broth until creamy, top with chicken, a drop of sesame oil and scallion."},
         {n:"Egg ribbon noodles", h:"Noodle soup with a beaten egg swirled into the simmering broth."}],
  shop:[{i:"6 bone-in chicken thighs",x:"meat",core:1},{i:"Big knob of ginger, scallions, 1 carrot"},{i:"Shaoxing wine",x:"gluten",sw:"Dry sherry"},{i:"Salt, white pepper"},
        {i:"Thin wheat noodles (or angel hair)",x:"gluten",sw:"Thin rice noodles"},{i:"Baby bok choy, spinach"},{i:"Rice, sesame oil"},{i:"Eggs",x:"egg",sw:""},{i:"Frozen dumplings",x:"gluten",sw:""}],
  tip:"Store noodles and broth separately so the noodles don't go soggy."},

{ id:"steamed", name:"Steamed Chicken & Shiitake", tag:"Gentle",
  why:"Bite-size chicken thighs steamed with shiitake, ginger and a little soy. Silky and savoury with no frying. Leave out the chillies and it's very mild.",
  sources:[{title:"Steamed Chicken with Shiitake Mushroom", by:"Wei Guo · Red House Spice", url:"https://redhousespice.com/steamed-chicken-mushroom", note:"25 minutes with boneless thighs. Skip the bird's eye chillies. Dried shiitake give the deepest flavour."}],
  prep:["Soak 10 dried shiitake overnight (keep the soaking water)","Marinate 1½ lb chunked boneless thighs with soy, oyster sauce, ginger, cornstarch and the sliced shiitake","Steam on a deep plate for 20 minutes; keep the juices","Cook a pot of rice","Wash bok choy or gai lan for steaming"],
  meals:[{n:"Over rice", h:"Chicken and mushrooms over rice with plenty of the steaming juices."},
         {n:"With steamed greens", h:"Steam bok choy for 3 minutes, plate with chicken and a drizzle of juices."},
         {n:"Mushroom chicken jook", h:"Simmer rice with water and the shiitake soaking liquid, top with chicken."},
         {n:"Gentle noodle bowl", h:"Thin noodles in light broth with chicken, mushrooms and spinach."},
         {n:"Steamed egg & chicken", h:"Steam a beaten egg with warm water for 10 minutes, top with chicken and scallion."}],
  shop:[{i:"1½ lb boneless chicken thighs",x:"meat",core:1},{i:"Dried shiitake mushrooms"},{i:"Ginger, scallions"},{i:"Light soy sauce",x:"gluten",sw:"Tamari"},{i:"Oyster sauce",x:["gluten","fish"],sw:"Gluten-free vegetarian oyster sauce"},
        {i:"Cornstarch"},{i:"Shaoxing wine",x:"gluten",sw:"Dry sherry"},{i:"Bok choy or gai lan, spinach"},{i:"Rice"},{i:"Thin noodles",x:"gluten",sw:"Thin rice noodles"},{i:"Eggs",x:"egg",sw:""},{i:"Chicken broth",x:"meat",core:1}]},

{ id:"yudofu", name:"Simmered Eggplant & Hot Tofu", tag:"Gentle",
  why:"Japanese eggplant simmered in a light dashi broth, tofu warmed in kombu water, and spinach with sesame. Soft, savoury and very mild.",
  sources:[{title:"Hot Tofu (Yudofu)", by:"Nami · Just One Cookbook", url:"https://www.justonecookbook.com/hot-tofu-yudofu/", note:"Tofu warmed in kombu broth with a soy dipping sauce. The sauce uses bonito flakes; leave them out for a plant-based dip."},
           {title:"Nasu Nibitashi (Braised Eggplant)", by:"Japanese Cooking 101", url:"https://www.japanesecooking101.com/nasu-nibitashi-braised-eggplant-recipe/", note:"Scored Japanese eggplant seared, then simmered in dashi, soy, sake and mirin and cooled in the broth. Finish with grated ginger and scallion."},
           {title:"Spinach with Sesame Sauce (Gomaae)", by:"Nami · Just One Cookbook", url:"https://www.justonecookbook.com/spinach-with-sesame-sauce/", note:"Blanched spinach in a sweet sesame dressing. Squeeze the spinach well so the dressing stays thick."}],
  prep:["Soak a piece of kombu in water for 1–2 hours (or steep it over the lowest heat) for the tofu broth","Score and sear 4 Japanese eggplants, simmer in dashi, soy, sake and mirin for 15–20 min, then cool in the liquid","Blanch 2 bunches of spinach, squeeze dry, toss with ground sesame, soy and sugar","Make the dipping sauce (soy, sake, mirin) and jar it","Cook a pot of short-grain rice; slice scallions and trim the mushrooms"],
  meals:[{n:"Yudofu night", h:"Warm tofu and mushrooms in the kombu broth, dip in the sauce, with rice and sesame spinach."},
         {n:"Eggplant over rice", h:"Simmered eggplant, warm or cold, over rice with a spoon of its broth, grated ginger and scallion."},
         {n:"Tofu mushroom soup", h:"Kombu broth with tofu, shiitake, enoki and a handful of spinach, seasoned with a splash of soy."},
         {n:"Broth over rice", h:"Rice in hot kombu broth, topped with chopped eggplant, spinach and sesame."},
         {n:"Soft egg plate", h:"Rice, sesame spinach, simmered eggplant and a soft-boiled egg."}],
  shop:[{i:"2 blocks medium-firm tofu"},{i:"Kombu"},{i:"4 Japanese eggplants"},{i:"Dashi",x:"fish",sw:"Kombu (for a plant-based dashi)"},{i:"Soy sauce",x:"gluten",sw:"Tamari"},{i:"Sake, mirin, sugar"},
        {i:"2 bunches spinach"},{i:"Sesame seeds"},{i:"Shiitake + enoki mushrooms"},{i:"Ginger, scallions"},{i:"Short-grain rice"},{i:"Eggs",x:"egg",sw:""}],
  tip:"The simmered eggplant tastes even better on day two. Keep it in its broth."},

{ id:"jadesoup", name:"Ginger Tofu & Greens Soup", tag:"Gentle",
  why:"A clear ginger broth with spinach, tofu and mushrooms, plus shiitake-braised tofu and soft steamed Japanese eggplant. Calm, green and filling.",
  sources:[{title:"Clear Spinach Soup with Tofu", by:"Catherine Saxelby · Foodwatch", url:"https://www.foodwatch.com.au/recipe/clear-spinach-soup-with-tofu/", note:"Known in Chinese as emerald and white jade soup. Spinach, tofu, mushrooms and plenty of grated ginger, simmered gently for 2–3 minutes."},
           {title:"Quick & Easy Braised Tofu (Hongshao Dofu)", by:"The Woks of Life", url:"https://thewoksoflife.com/quick-easy-braised-tofu-hongshao-dofu/", note:"Seared tofu braised with shiitake in a light soy sauce. Toss in bok choy at the end."},
           {title:"Chinese Eggplant with Garlic", by:"Cook With Dana", url:"https://cookwithdana.com/chinese-eggplant-with-garlic-sauce/", note:"Eggplant steamed 10–15 minutes, then dressed with garlic, hot oil and soy. Leave out the chilli."}],
  prep:["Make a big pot of light broth with ginger slices, scallion and soaked dried shiitake (keep the soaking water)","Sear and braise firm tofu with the shiitake (about 20 min)","Steam 3 Japanese eggplants until soft (10–15 min), dress with garlic, soy and a little hot oil","Cook a pot of jasmine rice","Wash spinach and bok choy"],
  meals:[{n:"Jade soup", h:"Heat broth with grated ginger, add spinach, soft tofu and mushrooms, simmer 3 minutes."},
         {n:"Braised tofu over rice", h:"Reheat the braised tofu and shiitake, wilt in bok choy, spoon over rice."},
         {n:"Steamed eggplant plate", h:"Garlic eggplant with rice and quickly blanched spinach."},
         {n:"Tofu noodle soup", h:"Thin noodles in the broth with braised tofu, bok choy and scallion."},
         {n:"Eggplant & tofu jook", h:"Simmer rice in broth until soft, top with chopped eggplant, tofu and spinach."}],
  shop:[{i:"2 blocks firm tofu"},{i:"1 block soft or silken tofu"},{i:"3 Japanese eggplants"},{i:"Dried shiitake + button mushrooms"},{i:"Big knob of ginger, garlic, scallions"},{i:"Vegetable broth"},
        {i:"Light soy sauce",x:"gluten",sw:"Tamari"},{i:"Shaoxing wine",x:"gluten",sw:"Dry sherry"},{i:"Big bag of spinach, baby bok choy"},{i:"Jasmine rice"},{i:"Thin noodles",x:"gluten",sw:"Thin rice noodles"},{i:"Sesame oil, neutral oil"}],
  tip:"Keep the broth at a gentle simmer once the tofu is in so it stays silky."},

{ id:"curry", name:"Red Lentil Curry", tag:"4.97★ · 2,800+ ratings",
  why:"You saved Nisha Vora's not-chicken and Lidey Heuck's red curry lentils. This is Nisha's most-rated recipe, creamy from coconut milk.",
  sources:[{title:"Red Lentil Curry", by:"Nisha Vora · Rainbow Plant Life", rating:"4.97★ from about 2,800 votes", url:"https://rainbowplantlife.com/red-lentil-curry/", note:"Creamy from coconut milk and almond butter. Make a double batch."}],
  prep:["Make a double batch of lentil curry (about 45 min)","Roast 2 cubed sweet potatoes at 425°F for 30 min","Cook a big pot of basmati rice","Quick-pickle a red onion in lime juice and salt","Boil 3 eggs to jammy"],
  meals:[{n:"Curry & rice", h:"The classic: curry over basmati with pickled onion and cilantro."},
         {n:"Sweet potato bowl", h:"Curry spooned over roasted sweet potato with a handful of spinach stirred in."},
         {n:"Dal and toasty pita", h:"Thick curry as a dip with warm pita and a squeeze of lime."},
         {n:"Lentil soup", h:"Thin the curry with broth, add a can of chickpeas, simmer 5 min."},
         {n:"Egg & chilli crisp", h:"Curry rice bowl with a jammy egg and a spoon of chilli crisp."}],
  shop:[{i:"2 cups red lentils"},{i:"2 cans full-fat coconut milk"},{i:"Almond butter",x:"nuts",sw:"Sunflower seed butter"},{i:"Garlic, ginger, 2 serranos"},{i:"Cumin, coriander, curry powder, garam masala"},{i:"Vegetable broth, 1 can chickpeas"},
        {i:"2 sweet potatoes, red onion, spinach"},{i:"Cilantro, limes, lemons"},{i:"Basmati rice"},{i:"Pita",x:"gluten",sw:"Gluten-free flatbread"},{i:"Eggs",x:"egg",sw:""},{i:"Chilli crisp"}]},

{ id:"shawarma", name:"Chicken Shawarma", tag:"Reader favourite",
  why:"Matches your saved turmeric chicken kebabs, Jerusalem hummus and Taverna salad. A spice-and-oil marinade with a lemony tahini sauce.",
  sources:[{title:"Chicken Shawarma (Middle Eastern)", by:"Nagi · RecipeTin Eats", url:"https://www.recipetineats.com/chicken-sharwama-middle-eastern/", note:"One of the site's most-requested recipes, with 40+ pages of reader comments. Use thighs."},
           {title:"Sheet Pan Chicken Shawarma with Sesame Sweet Potatoes and Hummus", by:"Tieghan Gerard · Half Baked Harvest", url:"https://www.halfbakedharvest.com/sheet-pan-chicken-shawarma/", note:"Borrow the sesame sweet potatoes for a second component."}],
  prep:["Marinate 2 lb chicken thighs overnight Saturday","Roast chicken and sliced onion on one tray, sweet potato on another (25 min)","Chop and slice the chicken, store with pan juices","Mix tahini sauce: tahini, lemon, garlic, water","Chop cucumber, tomato, parsley; keep undressed"],
  meals:[{n:"Pita wrap", h:"Warm pita, chicken, cucumber-tomato, tahini, pickled onion."},
         {n:"Hummus plate", h:"Hummus swoosh, chicken on top, sweet potato, olives, pita on the side."},
         {n:"Rice bowl", h:"Rice, chicken, chopped salad, tahini and chilli flakes."},
         {n:"Taverna-style salad", h:"Chopped salad, chickpeas, olives, feta, warm chicken."},
         {n:"Crispy chickpea greens", h:"Greens, chicken, pan-crisped chickpeas, lemon and tahini."}],
  shop:[{i:"2 lb boneless chicken thighs",x:"meat",core:1},{i:"Cumin, coriander, cardamom, paprika, turmeric, cinnamon"},{i:"Tahini, lemons, garlic"},{i:"2 sweet potatoes, red onion"},{i:"Cucumbers, tomatoes, parsley, salad greens"},
        {i:"Pita",x:"gluten",sw:"Gluten-free wraps"},{i:"Rice, 1 can chickpeas, olives"},{i:"Hummus"},{i:"Feta",x:"dairy",sw:"Dairy-free feta"}]},

{ id:"salmon", name:"Teriyaki Salmon Bowls", tag:"Sushi night at home",
  why:"You saved Andy Baraghani's sticky miso salmon bowl and miso-glazed fish. This turns one tray of salmon into a week of sushi-shop dinners.",
  sources:[{title:"Teriyaki Salmon", by:"Nami · Just One Cookbook", url:"https://www.justonecookbook.com/teriyaki-salmon-recipe/", note:"Authentic home-style method. Nami suggests leftovers for bento, onigirazu and rice bowls."},
           {title:"Teriyaki Salmon", by:"Jenn Segal · Once Upon a Chef", url:"https://www.onceuponachef.com/recipes/teriyaki-salmon.html", note:"20-minute alternative; readers call it the best salmon they've made."}],
  prep:["Cook seasoned sushi rice (rice + rice vinegar, sugar, salt)","Roast or pan-sear 1.5 lb teriyaki salmon","Quick-pickle sliced cucumber in rice vinegar and salt","Shell edamame, shred carrot, slice scallions","Mix spicy mayo: mayo + sriracha"],
  meals:[{n:"Sushi bowl", h:"Rice, flaked salmon, pickled cucumber, avocado, spicy mayo, nori."},
         {n:"Hand rolls", h:"Nori squares, rice, salmon, cucumber, avocado. Roll and eat."},
         {n:"Cucumber-avocado salad", h:"Smashed cucumber and avocado with salmon, sesame and chilli."},
         {n:"Salmon fried rice", h:"Day-old rice in a hot pan with egg, edamame, salmon, scallions."},
         {n:"Onigirazu", h:"Rice sandwich: nori, rice, salmon, cucumber, folded and cut in half."}],
  shop:[{i:"1.5 lb salmon fillets",x:"fish",core:1},{i:"Soy sauce",x:"gluten",sw:"Tamari"},{i:"Mirin, sake (or dry sherry), sugar"},{i:"Sushi rice, rice vinegar"},{i:"Nori sheets"},{i:"Cucumbers, carrots, scallions, 2 avocados"},
        {i:"Frozen edamame"},{i:"Eggs",x:"egg",sw:""},{i:"Mayo",x:"egg",sw:"Vegan mayo"},{i:"Sriracha, sesame seeds"}],
  tip:"Cooked salmon keeps about 3 days, so eat the salmon meals first and save fried rice for later in the week."},

{ id:"moroccan", name:"Moroccan Lentil Soup", tag:"4.88★ · cosy",
  why:"You saved the red lentil pumpkin soup and Melissa Clark's honeynut squash and chickpeas. This spiced soup finishes with a lemony tahini drizzle.",
  sources:[{title:"Moroccan Spiced Lentil & Chickpea Soup", by:"Niki Webster · Rebel Recipes", rating:"4.88★ from 32 votes", url:"https://www.rebelrecipes.com/moroccan-spiced-lentil-chickpea-soup/", note:"Vegan, about 45 minutes, with a lemony tahini dressing."},
           {title:"Moroccan Lentil and Vegetable Stew", by:"Beth Moncel · Budget Bytes", url:"https://www.budgetbytes.com/moroccan-lentil-vegetable-stew/", note:"Cheap, thicker alternative that readers call their favourite lentil soup."}],
  prep:["Make a double pot of soup (about 45 min)","Roast a cubed squash at 425°F for 30 min","Mix tahini dressing: tahini, lemon, water, salt","Roast a can of chickpeas until crispy","Cook couscous or rice"],
  meals:[{n:"Soup & tahini", h:"Bowl of soup with tahini drizzle and cilantro."},
         {n:"Stew over couscous", h:"Simmer soup down for 3 minutes until thick, spoon over couscous."},
         {n:"Squash bowl", h:"Soup over roasted squash with crispy chickpeas on top."},
         {n:"Harissa heat", h:"Stir extra harissa into the soup, top with crispy chickpeas and lemon."},
         {n:"Egg & pita", h:"Crack an egg into simmering soup, cover 4 minutes, scoop with pita."}],
  shop:[{i:"Red split lentils, 2 cans chickpeas"},{i:"Onion, garlic, celery, carrots, tomatoes"},{i:"Cumin seeds, cinnamon, turmeric, smoked paprika"},{i:"Harissa paste, vegetable stock"},{i:"Tahini, lemons, cilantro"},{i:"1 squash (butternut or honeynut)"},
        {i:"Couscous",x:"gluten",sw:"Quinoa or rice"},{i:"Pita",x:"gluten",sw:"Gluten-free flatbread"},{i:"Eggs",x:"egg",sw:""}]},

{ id:"gochujang", name:"Gochujang Chicken Bowls", tag:"Spicy & fast",
  why:"Something new for when Mediterranean feels samey. Same bowl format as your sushi orders, with a sweet-spicy kick.",
  sources:[{title:"Sweet and Spicy Gochujang Chicken Bowls", by:"Monique Volz · Ambitious Kitchen", url:"https://www.ambitiouskitchen.com/?p=87258", note:"One pan, 30 minutes. Readers praise the sauce and how much can be prepped ahead."},
           {title:"Spicy Gochujang Ground Chicken Bowls", by:"Fit Foodie Finds", url:"https://fitfoodiefinds.com/ground-chicken-bowls", note:"Borrow the crunchy slaw; readers double it for lunches."}],
  prep:["Cook the gochujang chicken (30 min)","Make the slaw: shredded cabbage, carrot, rice vinegar, sesame oil","Cook a big pot of jasmine rice","Slice cucumber and scallions","Boil 3 eggs to jammy"],
  meals:[{n:"Classic bowl", h:"Rice, chicken, slaw, cucumber, sesame seeds."},
         {n:"Lettuce wraps", h:"Butter lettuce cups with chicken, slaw and scallions."},
         {n:"Crispy rice bowl", h:"Press cold rice into a hot oiled pan for 5 min, top with chicken and an egg."},
         {n:"Gochujang noodles", h:"Toss cooked noodles with chicken, sesame oil and a splash of soy."},
         {n:"Slaw salad", h:"Big pile of slaw, chicken, cucumber, peanuts, lime."}],
  shop:[{i:"1 lb ground chicken (or turkey)",x:"meat",core:1},{i:"Gochujang",x:"gluten",sw:"Gluten-free gochujang"},{i:"Soy sauce",x:"gluten",sw:"Tamari"},{i:"Honey",x:"honey",sw:"Maple syrup"},{i:"Sesame oil, rice vinegar"},{i:"Garlic, ginger, scallions"},
        {i:"Half a cabbage, carrots, cucumbers, butter lettuce"},{i:"Jasmine rice"},{i:"Noodles",x:"gluten",sw:"Rice noodles"},{i:"Eggs",x:"egg",sw:""},{i:"Sesame seeds, limes"},{i:"Peanuts",x:"nuts",sw:""}]}
];

const CAT = {yudofu:"Plant-based",jadesoup:"Plant-based",poached:"Chicken",noodlesoup:"Chicken",steamed:"Chicken",stew:"Plant-based",goddess:"Plant-based",garlic:"Plant-based",bulgogi:"Plant-based",miso:"Plant-based",curry:"Plant-based",moroccan:"Plant-based",shawarma:"Chicken",gochujang:"Chicken",salmon:"Fish"};
const HERO = {yudofu:["Japanese eggplant","Tofu","Spinach","Mushrooms"],jadesoup:["Tofu","Spinach","Shiitake","Japanese eggplant"],poached:["Chicken thighs","Ginger","Scallion"],noodlesoup:["Chicken thighs","Clear broth","Bok choy"],steamed:["Chicken thighs","Shiitake","Ginger"],stew:["Chickpeas","Coconut","Greens"],goddess:["Baby bella","Eggplant","Tofu","Kale"],garlic:["Japanese eggplant","Pressed tofu","Shiitake"],bulgogi:["King oyster","Spinach","Kimchi"],miso:["Eggplant","Shiitake","Tofu"],curry:["Red lentils","Sweet potato","Spinach"],moroccan:["Lentils","Chickpeas","Squash"],shawarma:["Chicken thighs","Tahini","Sweet potato"],gochujang:["Ground chicken","Cabbage slaw"],salmon:["Salmon","Sushi rice","Avocado"]};
const STEPS = ["diet","choose","recipes","shop","prep"];
const GENTLE = new Set(["poached","noodlesoup","steamed","yudofu","jadesoup","miso"]);
const CUISINE = {yudofu:"Japanese · gentle",jadesoup:"Chinese · gentle",poached:"Cantonese · gentle",noodlesoup:"Chinese · gentle",steamed:"Cantonese · gentle",stew:"Middle Eastern-inspired",goddess:"Mediterranean grain bowl",garlic:"Chinese",bulgogi:"Korean",miso:"Japanese · gentle",curry:"Indian-inspired",moroccan:"Moroccan",shawarma:"Middle Eastern",gochujang:"Korean",salmon:"Japanese"};

// Dietary preferences: each one rules out some of the tags used on shop items
const DIETS = [
  {id:"vegetarian", label:"Vegetarian", hint:"No meat or fish", no:["meat","fish"]},
  {id:"vegan", label:"Vegan", hint:"No animal products", no:["meat","fish","dairy","egg","honey"]},
  {id:"pescatarian", label:"Pescatarian", hint:"Fish, but no meat", no:["meat"]},
  {id:"dairy", label:"Dairy-free", hint:"No milk, cheese or yogurt", no:["dairy"]},
  {id:"gluten", label:"Gluten-free", hint:"No wheat, barley or rye", no:["gluten"]},
  {id:"egg", label:"Egg-free", hint:"No eggs or mayo", no:["egg"]},
  {id:"nuts", label:"Nut-free", hint:"No peanuts or tree nuts", no:["nuts"]}
];
// Quick tips for meal ideas and prep steps that mention something you've ruled out
const HINTS = {egg:["skip the egg",/\beggs?\b|\byolks?\b/i],
  dairy:["use dairy-free",/\b(feta|yogurt|cheese|cream)\b/i],
  gluten:["use gluten-free",/\b(pitas?|lavash|noodles?|bread|couscous|farro|dumplings?|toast|soy)\b/i],
  nuts:["skip the nuts",/\b(peanuts?|almonds?|cashews?)\b/i],
  fish:["use a fish-free version",/\b(fish|kimchi|dashi)\b/i],
  honey:["use maple syrup",/\bhoney\b/i]};

const store = { get(k,d){try{const v=localStorage.getItem("rk3_"+k);return v?JSON.parse(v):d}catch(e){return d}},
                set(k,v){try{localStorage.setItem("rk3_"+k,JSON.stringify(v))}catch(e){}} };
// Shopping lists were re-split for the diet swaps, so older ticks don't carry over; the chosen kit does
const old = (()=>{try{return JSON.parse(localStorage.getItem("rk2_state"))}catch(e){return null}})();
let S = store.get("state",{kit:old?.kit||null,step:"choose",filter:old?.filter||"All",prefs:{diet:[],avoid:[]},showAll:false,per:{}});
S.extra ||= []; S.have ||= {};
let showCopy=false, pick=null;
const $ = id=>document.getElementById(id);
const kit = ()=>KITS.find(k=>k.id===S.kit)||null;
const per = ()=> (S.per[S.kit] ||= {have:[],prep:[]});
const save = ()=>store.set("state",S);
const esc = s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function toast(t){const el=$("toast");el.textContent=t;el.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>el.hidden=true,1800)}

const prefs = ()=>S.prefs;
const hasPrefs = ()=>prefs().diet.length>0||prefs().avoid.length>0;
const ruledOut = ()=>new Set(prefs().diet.flatMap(d=>DIETS.find(x=>x.id===d)?.no||[]));
const wordRe = w=>new RegExp("\\b"+w.replace(/s$/i,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(e?s)?\\b","i");
const prefSummary = ()=>[...prefs().diet.map(d=>DIETS.find(x=>x.id===d)?.label).filter(Boolean),...prefs().avoid.map(a=>"no "+a)].join(" · ");

// How a kit fits your preferences: each shop item is kept, swapped, left out, or flagged
function fitOf(k){
  const no=ruledOut(), av=prefs().avoid.map(wordRe);
  const items=k.shop.map((x,i)=>{
    const hit=[].concat(x.x||[]).some(t=>no.has(t));
    let text=x.i, kind="";
    if(hit)kind=x.sw===""?"out":x.sw?"swap":"no";
    if(hit&&x.sw)text=x.sw;
    if(kind!=="out"&&kind!=="no"&&av.some(r=>r.test(text)))kind="avoid";
    return {...x,i,orig:x.i,text,kind}});
  const core=items.some(x=>x.core&&x.kind==="no")||av.some(r=>r.test(k.name)||(HERO[k.id]||[]).some(h=>r.test(h)));
  return {core,items,changes:items.filter(x=>x.kind)};
}
function hintsFor(text){
  const out=[];
  for(const t of ruledOut()){const h=HINTS[t];if(h&&h[1].test(text)&&!out.includes(h[0]))out.push(h[0])}
  for(const w of prefs().avoid)if(wordRe(w).test(text))out.push("leave out "+w);
  return out.map(h=>`<span class="flag">${esc(h)}</span>`).join("");
}
// This week's shop: the selected kit plus up to two more, merged into one grocery list
const MAX_EXTRA = 2;
const plan = ()=>[S.kit,...S.extra.filter(id=>id!==S.kit)].map(id=>KITS.find(k=>k.id===id)).filter(Boolean);
const planKey = ()=>plan().map(k=>k.id).sort().join("+");
const haveList = ()=>(S.have[planKey()] ||= []);
// Split "Garlic, ginger + scallions" into single ingredients, leaving commas inside brackets alone
function parts(text){
  const out=[];let depth=0,cur="";
  for(let j=0;j<text.length;j++){
    const c=text[j];
    if(c==="(")depth++; if(c===")")depth--;
    if(!depth&&c===","){out.push(cur);cur="";continue}
    if(!depth&&text.startsWith(" + ",j)){out.push(cur);cur="";j+=2;continue}
    cur+=c}
  out.push(cur);return out.map(x=>x.trim()).filter(Boolean);
}
const QTY = /^((?:\d[\d½¼¾.\/–-]*|[½¼¾])\s*(?:lb|oz|cups?|cans?|blocks?|bunch(?:es)?)?\s+(?:of\s+)?|(?:half an?|big knob of|big bag of|bag of|bunch of)\s+)/i;
const keyOf = t=>t.toLowerCase().replace(/\(.*?\)/g,"").replace(/[^a-z& ]/g," ").replace(/\s+/g," ").trim().replace(/(es|s)$/,"");
function groceries(){
  const kits=plan(), multi=kits.length>1, map=new Map();
  for(const k of kits)for(const x of fitOf(k).items){
    if(x.kind==="out")continue;
    for(const part of multi?parts(x.text):[x.text]){
      const m=multi?part.match(QTY):null, qty=m?m[1].trim().replace(/\s+of$/i,""):"", rest=m?part.slice(m[1].length):part;
      const key=multi?keyOf(rest):keyOf(part);
      const e=map.get(key)||{key,text:part,name:rest,qtys:[],bare:false,kits:new Set(),kinds:new Set()};
      if(qty)e.qtys.push(qty.toLowerCase());else e.bare=true;
      e.kits.add(k.id); if(x.kind)e.kinds.add(x.kind);
      map.set(key,e)}}
  return [...map.values()].map(e=>{
    const many=e.qtys.length>1||(e.qtys.length&&e.bare&&e.kits.size>1);
    const cap=t=>t.charAt(0).toUpperCase()+t.slice(1);
    return {...e,text:cap(many?`${e.name} (${e.qtys.join(" + ")}${e.bare?" + extra":""})`:e.text)}});
}
const needList = ()=>{const h=haveList();return groceries().filter(e=>!h.includes(e.key))};
function fitLine(k){
  if(!hasPrefs())return "";
  const f=fitOf(k), n=f.changes.length;
  return f.core?`<span class="fit no">Not a fit for your diet</span>`
    :n?`<span class="fit swap">Fits with ${n} swap${n===1?"":"s"}</span>`:`<span class="fit good">✓ Fits as is</span>`;
}
function changeText(c){
  if(c.kind==="out")return `<b>${esc(c.orig)}</b>: leave out`;
  if(c.kind==="swap")return `${esc(c.orig)} → <b>${esc(c.text)}</b>`;
  if(c.kind==="no")return `<b>${esc(c.orig)}</b> doesn't fit your diet`;
  return `<b>${esc(c.text)}</b>: you're avoiding this, so leave it out or swap it`;
}

function go(step){S.step=step;showCopy=false;render();window.scrollTo({top:0,behavior:"smooth"})}

function render(){
  const k=kit();
  STEPS.forEach((s,i)=>{const b=$("s-"+s);b.disabled=!k&&!["diet","choose"].includes(s);
    b.setAttribute("aria-current",S.step===s?"step":"false");
    b.classList.toggle("done",STEPS.indexOf(S.step)>i&&(s!=="diet"||hasPrefs()))});
  const P=$("panel");
  if(!["diet","choose"].includes(S.step)&&!k){S.step="choose"}
  if(S.step==="diet"){
    const p=prefs();
    P.innerHTML=`<div class="kit-head"><span class="label">Optional</span><h2>Any dietary needs?</h2><p>Pick anything that applies and you'll only see kits that work for you, with ingredients swapped where needed. Leave it blank to see everything.</p></div>
      <div class="diets">${DIETS.map(d=>`<button class="diet" data-diet="${d.id}" aria-pressed="${p.diet.includes(d.id)}"><b>${esc(d.label)}</b><span>${esc(d.hint)}</span></button>`).join("")}</div>
      <label class="label" for="avoid">Anything else you don't eat?</label>
      <div class="avoidrow"><input id="avoid" type="text" autocomplete="off" placeholder="e.g. mushrooms, cilantro"><button class="btn" id="addAvoid">Add</button></div>
      ${p.avoid.length?`<div class="pills">${p.avoid.map((w,i)=>`<button class="pill" data-unavoid="${i}" aria-label="Remove ${esc(w)}">${esc(w)} <span aria-hidden="true">×</span></button>`).join("")}</div>`:""}
      <div class="cta"><p>${hasPrefs()?`For you: <b>${esc(prefSummary())}</b>`:"Nothing to add? Skip ahead."}</p><button class="btn primary" data-go="choose">${hasPrefs()?"Show my kits →":"See all kits →"}</button></div>`;
  } else if(S.step==="choose"){
    const fits=KITS.filter(x=>S.showAll||!fitOf(x).core);
    const hidden=KITS.length-KITS.filter(x=>!fitOf(x).core).length;
    const inCat=(x,c)=>c==="All"||(c==="Gentle"?GENTLE.has(x.id):CAT[x.id]===c);
    const cats=["All","Gentle","Plant-based","Chicken","Fish"].filter(c=>fits.some(x=>inCat(x,c)));
    if(!cats.includes(S.filter))S.filter="All";
    const list=fits.filter(x=>inCat(x,S.filter));
    P.innerHTML=`${hasPrefs()?`<div class="prefbar"><p>For you: <b>${esc(prefSummary())}</b></p><button class="btn small" data-go="diet">Edit</button></div>`:""}
      <p class="intro">Each kit is one grocery shop and one weekend prep that turns into five different dinners. Tap one to see its recipes.</p>
      ${S.filter==="Gentle"?`<p class="note">For days your stomach feels off: mild broths, steamed or simmered chicken, tofu, mushrooms, Japanese eggplant and leafy greens. Ginger, no chilli.</p>`:""}
      <div class="filters">${cats.map(c=>`<button class="filter" data-filter="${c}" aria-pressed="${S.filter===c}">${c}</button>`).join("")}</div>
      ${k?`<div class="cta"><p>Selected: <b>${esc(plan().map(x=>x.name).join(" + "))}</b></p><button class="btn primary" data-go="recipes">See the recipes →</button></div>`:""}
      ${list.length?`<div class="grid">${list.map(x=>`<button class="card" data-kit="${x.id}" aria-pressed="${x.id===S.kit}">
        ${x.id===S.kit?`<span class="badge">Selected</span>`:S.extra.includes(x.id)?`<span class="badge">In this shop</span>`:""}
        <span class="tag">${esc(CUISINE[x.id])}</span>
        <h3>${esc(x.name)}</h3>
        <p class="why">${esc(x.why)}</p>
        <span class="meta">${(HERO[x.id]||[]).map(h=>`<span class="chip">${esc(h)}</span>`).join("")}</span>
        ${fitLine(x)}
      </button>`).join("")}</div>`:`<div class="empty"><p>No kits fit all of that yet.</p><button class="btn small" data-go="diet">Change preferences</button></div>`}
      ${hidden?`<p class="note">${hidden} kit${hidden===1?" is":"s are"} built around something you don't eat. <button class="linkbtn" id="toggleAll">${S.showAll?"Hide them":"Show them anyway"}</button></p>`:""}`;
  } else if(S.step==="recipes"){
    const f=fitOf(k);
    P.innerHTML=`<div class="kit-head"><span class="label">${esc(CUISINE[k.id])}</span><h2>${esc(k.name)}</h2><p>${esc(k.why)}</p></div>
      ${S.extra.length?`<p class="note">Also in this week's shop: ${plan().slice(1).map(x=>`<button class="linkbtn" data-kit="${x.id}">${esc(x.name)}</button>`).join(", ")}</p>`:""}
      ${hasPrefs()&&(f.changes.length||f.core)?`<div class="swaps"><span class="label">Adjusted for your diet</span>
        ${f.core?`<p>This kit is built around something you don't eat, so it may not work for you.</p>`:""}
        <ul>${f.changes.map(c=>`<li>${changeText(c)}</li>`).join("")}</ul></div>`:""}
      <span class="label">Five remixes</span>
      <div class="list">${k.meals.map((m,i)=>`<div class="meal ${pick===i?"picked":""}"><span class="n">${i+1}</span><div><h4>${esc(m.n)}</h4><p>${esc(m.h)}${hintsFor(m.h)}</p></div></div>`).join("")}</div>
      <div class="cta"><p>Too tired to decide tonight?</p><button class="btn small" id="pickOne">Pick one for me</button></div>
      <span class="label">Base recipes</span>
      ${k.sources.map(s=>`<div class="src"><a href="${s.url}" target="_blank" rel="noopener">${esc(s.title)} ↗</a><span class="by">${esc(s.by)}</span><p>${esc(s.note)}</p></div>`).join("")}
      ${k.tip?`<p class="note">${esc(k.tip)}</p>`:""}
      <div class="cta"><p>Happy with these? You can add another kit to the same shop on the next step.</p><button class="btn primary" data-go="shop">Build grocery list →</button></div>`;
  } else if(S.step==="shop"){
    const kits=plan(), multi=kits.length>1, have=haveList(), list=groceries(), need=needList();
    const out=[...new Set(kits.flatMap(x=>fitOf(x).items.filter(i=>i.kind==="out").map(i=>i.orig)))];
    const others=KITS.filter(x=>x.id!==S.kit&&(S.showAll||!fitOf(x).core||S.extra.includes(x.id)));
    const full=S.extra.length>=MAX_EXTRA;
    const FLAG={swap:"swapped for your diet",no:"doesn't fit your diet",avoid:"you avoid this"};
    P.innerHTML=`<div class="kit-head"><span class="label">${esc(kits.map(x=>x.name).join(" + "))}</span><h2>Grocery list</h2><p>${multi?`One list for ${kits.length} kits, with shared ingredients combined. `:""}Tick off anything you already have at home. Then copy what's left into your notes or shopping app.</p></div>
      <details class="combine" ${multi?"open":""}><summary>${multi?`Shopping for ${kits.length} kits`:"Cooking more than one kit this week?"}</summary>
        <p class="note">${full?`That's the most for one shop. Remove one to swap it out.`:`Add up to ${MAX_EXTRA-S.extra.length} more kit${MAX_EXTRA-S.extra.length===1?"":"s"} to shop for everything in one trip.`}</p>
        <div class="filters">${others.map(o=>{const on=S.extra.includes(o.id);return `<button class="filter" data-extra="${o.id}" aria-pressed="${on}" ${!on&&full?"disabled":""}>${on?"✓ ":"+ "}${esc(o.name)}</button>`}).join("")}</div></details>
      <div class="list">${list.map(e=>`<label class="check"><input type="checkbox" id="have-${esc(e.key).replace(/\W+/g,"-")}" data-have="${esc(e.key)}" ${have.includes(e.key)?"checked":""}><span>${esc(e.text)}${[...e.kinds].map(x=>`<span class="flag">${FLAG[x]}</span>`).join("")}${multi&&e.kits.size>1?`<span class="flag shared">${e.kits.size===kits.length&&kits.length===2?"both kits":e.kits.size+" kits"}</span>`:""}</span></label>`).join("")}</div>
      ${out.length?`<p class="note">Left off for your diet: ${esc(out.join(", "))}.</p>`:""}
      <div class="copybar"><span class="count">${need.length} item${need.length===1?"":"s"} to buy</span>
        <span class="row" style="display:flex;gap:8px;flex-wrap:wrap">${have.length?`<button class="btn small" id="clearHave">Untick all</button>`:""}<button class="btn primary" id="copy" ${need.length?"":"disabled"}>Copy list</button></span></div>
      ${showCopy?`<label class="label" for="copyText">Select all and copy</label><textarea id="copyText" readonly>${esc(listText())}</textarea>`:""}
      <div class="cta"><p>Got your groceries?</p><button class="btn primary" data-go="prep">Prep plan →</button></div>`;
  } else {
    const kits=plan(), multi=kits.length>1;
    const total=kits.reduce((n,x)=>n+x.prep.length,0), done=kits.reduce((n,x)=>n+(S.per[x.id]?.prep.length||0),0);
    P.innerHTML=`<div class="kit-head"><span class="label">${esc(kits.map(x=>x.name).join(" + "))}</span><h2>Prep plan</h2><p>${multi?`Allow about 1½ hours per kit. Do it in one long session or split it across Saturday and Sunday.`:`Do this when you have about 1½ hours, usually Sunday.`} After that, every dinner is about 10 minutes of putting things together.</p></div>
      ${kits.map(x=>{const pr=S.per[x.id]?.prep||[];return `${multi?`<h3 class="prep-kit">${esc(x.name)}</h3>`:""}<span class="label">${pr.length} of ${x.prep.length} done</span>
      <div class="list">${x.prep.map((t,i)=>`<label class="check"><input type="checkbox" id="pr-${x.id}-${i}" data-prep="${i}" data-pkit="${x.id}" ${pr.includes(i)?"checked":""}><span>${esc(t)}${hintsFor(t)}</span></label>`).join("")}</div>`}).join("")}
      <p class="note">Store each part in its own container. Keep sauces and greens separate until you eat, so nothing goes soggy.</p>
      <div class="cta"><p>${done===total?"All prepped. Enjoy the week!":"Ready for a new week?"}</p><button class="btn" id="resetKit">${multi?"Start these kits fresh":"Start this kit fresh"}</button></div>
      <div class="cta"><p>Want something different next week?</p><button class="btn primary" data-go="choose">Choose another kit</button></div>`;
  }
  save();
}
function listText(){return plan().map(k=>k.name).join(" + ")+" groceries\n"+needList().map(x=>"- "+x.text).join("\n")}
function addAvoid(){
  const el=$("avoid"); if(!el)return;
  const words=el.value.split(",").map(w=>w.trim().toLowerCase()).filter(w=>w&&!prefs().avoid.includes(w));
  if(!words.length){el.focus();return}
  prefs().avoid.push(...new Set(words)); render(); $("avoid").focus();
}

document.addEventListener("click",async e=>{
  const t=e.target.closest("button"); if(!t||t.disabled)return;
  if(t.dataset.step){go(t.dataset.step);return}
  if(t.dataset.go){go(t.dataset.go);return}
  if(t.dataset.filter){S.filter=t.dataset.filter;render();return}
  if(t.dataset.diet){const d=prefs().diet,id=t.dataset.diet;prefs().diet=d.includes(id)?d.filter(x=>x!==id):[...d,id];render();return}
  if(t.dataset.unavoid!==undefined){prefs().avoid.splice(+t.dataset.unavoid,1);render();return}
  if(t.id==="addAvoid"){addAvoid();return}
  if(t.id==="toggleAll"){S.showAll=!S.showAll;render();return}
  if(t.dataset.extra){const id=t.dataset.extra;S.extra=S.extra.includes(id)?S.extra.filter(x=>x!==id):[...S.extra,id].slice(0,MAX_EXTRA);render();return}
  if(t.dataset.kit){
    const id=t.dataset.kit;
    // Picking a kit that's already in this week's shop just swaps which one you're viewing
    if(S.extra.includes(id))S.extra=[S.kit,...S.extra.filter(x=>x!==id)];
    else if(S.kit!==id)S.extra=[];
    if(S.kit!==id){S.kit=id;pick=null}
    go("recipes");return}
  if(t.id==="pickOne"){const k=kit();let i;do{i=Math.floor(Math.random()*k.meals.length)}while(k.meals.length>1&&i===pick);pick=i;render();toast("Tonight: "+k.meals[i].n);return}
  if(t.id==="clearHave"){S.have[planKey()]=[];render();return}
  if(t.id==="copy"){
    const txt=listText();
    try{await navigator.clipboard.writeText(txt);toast("Copied "+needList().length+" items")}
    catch(err){showCopy=true;render();const ta=$("copyText");if(ta){ta.focus();ta.select()}toast("Select the text below and copy it")}
    return}
  if(t.id==="resetKit"){plan().forEach(x=>S.per[x.id]={have:[],prep:[]});S.have[planKey()]=[];render();toast("Fresh start")}
});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.id==="avoid"){e.preventDefault();addAvoid()}});
document.addEventListener("change",e=>{
  const t=e.target; if(t.id==="avoid")return;
  const tog=(arr,i)=>arr.includes(i)?arr.filter(x=>x!==i):[...arr,i];
  if(t.dataset.have!==undefined){S.have[planKey()]=tog(haveList(),t.dataset.have);render()}
  if(t.dataset.prep!==undefined){const p=(S.per[t.dataset.pkit] ||= {have:[],prep:[]});p.prep=tog(p.prep,+t.dataset.prep);render()}
});

// Where we're running: a website/installed PWA, or a browser extension page (popup or tab)
const EXT = globalThis.chrome?.runtime?.id ? chrome : globalThis.browser?.runtime?.id ? browser : null;
const POPUP = new URLSearchParams(location.search).has("popup");
if(POPUP)document.documentElement.classList.add("popup");

// Shortcuts and deep links: ?step=shop opens the current kit at that step
const want=new URLSearchParams(location.search).get("step");
if(STEPS.includes(want))S.step=want;

if(EXT&&POPUP){
  $("openTab").hidden=false;
  $("openTab").onclick=()=>{EXT.tabs.create({url:EXT.runtime.getURL("index.html")});window.close()};
}

// Standalone app: offer an install button where the browser supports it
let installEvt=null;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installEvt=e;$("install").hidden=false});
window.addEventListener("appinstalled",()=>{$("install").hidden=true;installEvt=null;toast("Installed. Find Remix Kitchen with your apps")});
$("install").onclick=async()=>{if(!installEvt)return;installEvt.prompt();await installEvt.userChoice;installEvt=null;$("install").hidden=true};

// Offline support for the website only; extension pages are already local
if(!EXT&&"serviceWorker" in navigator&&location.protocol.startsWith("http")){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))}

render();
