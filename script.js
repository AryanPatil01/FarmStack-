        // --- MOBILE MENU TOGGLE ---
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const navContainer = document.getElementById('nav-container');

        mobileBtn.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            // Toggle icon between bars and close (X)
            if(navContainer.classList.contains('active')) {
                mobileBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            } else {
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });

        // Close menu when a link is clicked on mobile
        document.querySelectorAll('.nav-links a, .btn-primary').forEach(link => {
            link.addEventListener('click', () => {
                navContainer.classList.remove('active');
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });

        // --- SCHEMES DATA ---
        const schemes = [
            {
                rank: 1,
                name: "PM-Kisan Samman Nidhi",
                image: "https://images-ext-1.discordapp.net/external/60p-T2YT5yLQEplzvyt2cvF10hnql85O-sFpZ8Ok7tE/https/api.iref.net/uploads/2025/07/PM-Kisan-Samman-Nidhi-Yojana-20th-Installment-Date-Benefits-Eligibility-Documents-Other-Detail.webp?format=webp&width=1319&height=693",
                desc: "A central sector scheme providing an income support of ₹6,000 per year in three equal installments directly into the bank accounts of all landholding farmers' families."
            },
            {
                rank: 2,
                name: "PM Fasal Bima Yojana",
                image: "https://images-ext-1.discordapp.net/external/h7o43F3rpQzNTAVc1lxggWVmMhUg5R7wWzCOdfvZbPw/https/lms24x7.s3.amazonaws.com/gsktestimonials/uploads/2020/11/24165933/Pradhan-Mantri-Fasal-Bima-Yojana.jpg?format=webp&width=1385&height=693",
                desc: "An insurance service for farmers for their yields. It aims to reduce the premium burden on farmers and ensure early settlement of crop assurance claims."
            },
            {
                rank: 3,
                name: "Kisan Credit Card (KCC)",
                image: "https://images-ext-1.discordapp.net/external/qYH38NfBctG7OE3dHMiTRuNGCdqMrQYOnIo5_hL3u3A/https/akm-img-a-in.tosshub.com/lingo/ktak/images/story/202505/6835a2c253c71-kisan-credit-card-273212772-16x9.jpg?format=webp&width=1240&height=698",
                desc: "Provides farmers with timely access to credit. It offers short-term credit limits for crops and term loans for agriculture-related assets like pump sets and tractors."
            },
            {
                rank: 4,
                name: "PM Krishi Sinchai Yojana",
                image: "https://cdn.s3waas.gov.in/s3b1eec33c726a60554bc78518d5f9b32c/uploads/2019/11/2019111561.jpg",
                desc: "Focuses on 'Har Khet Ko Pani' and 'Per Drop More Crop'. It aims to improve on-farm water use efficiency through micro-irrigation and better water distribution."
            },
            {
                rank: 5,
                name: "PM-KUSUM",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrkxQF9PlucLKNyKPHoAyVJ1qIUs2qCmK1Q&s",
                desc: "Aims to provide energy security to farmers by installing solar pumps and grid-connected solar power plants to de-dieselize the farm sector."
            }
        ];

        const schemeContainer = document.getElementById('schemeContainer');
        schemes.forEach(scheme => {
            const card = `
                <div class="scheme-card">
                    <div class="card-image-container">
                        <span class="rank-badge">Rank #${scheme.rank}</span>
                        <img src="${scheme.image}" alt="${scheme.name}">
                    </div>
                    <div class="scheme-content">
                        <h3>${scheme.name}</h3>
                        <p>${scheme.desc}</p>
                        <a href="#" class="learn-more">Scheme Details</a>
                    </div>
                </div>
            `;
            schemeContainer.innerHTML += card;
        });

        // --- CROPS DATA ---
        const crops = [
            {
                name: "Rice (Paddy)",
                type: "Kharif",
                duration: "120-150 Days",
                image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop",
                desc: "The staple food for a large portion of the population. It requires significant water, warm temperatures, and thrives in alluvial soil."
            },
            {
                name: "Wheat",
                type: "Rabi",
                duration: "110-130 Days",
                image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop",
                desc: "A crucial cereal crop grown in winter. It requires cool weather during growth and bright sunshine during ripening. Prefers well-drained loamy soils."
            },
            {
                name: "Maize (Corn)",
                type: "Kharif/Rabi",
                duration: "90-110 Days",
                image: "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg",
                desc: "A versatile food, feed, and industrial crop. It grows well under varied climatic conditions and requires well-drained, fertile soils."
            },
            {
                name: "Sugarcane",
                type: "Cash Crop",
                duration: "10-12 Months",
                image: "https://assets.revistacultivar.com.br/2379de24-5ebb-4124-944e-4f0cd6bef5e3.jpeg",
                desc: "A major cash crop for sugar production. It is a long-duration crop requiring warm, humid climate and ample irrigation throughout its cycle."
            },
            {
                name: "Cotton",
                type: "Kharif Fiber",
                duration: "160-180 Days",
                image: "https://t4.ftcdn.net/jpg/06/84/31/79/360_F_684317966_Pn9qU1DEfW5zpwoj25znJ1i0VdaOM2Px.jpg",
                desc: "A significant fiber crop known as 'White Gold'. It thrives in high temperatures and requires moderate rainfall. Grows best in black cotton soils."
            },
            {
                name: "Potato",
                type: "Vegetable",
                duration: "90-120 Days",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_r2IddP5fca1fGGRmIN7fgJ2w_-l7P8Lflw&s",
                desc: "A widely consumed tuber crop and essential vegetable. It requires cool nights and bright sunny days for good tuber formation. Needs loose soil."
            }
        ];

        const cropContainer = document.getElementById('cropContainer');
        crops.forEach(crop => {
            const card = `
                <div class="crop-card-v2">
                    <div class="card-image-container">
                        <span class="crop-type-badge">${crop.type}</span>
                        <img src="${crop.image}" alt="${crop.name}">
                    </div>
                    <div class="crop-content-v2">
                        <h3>${crop.name}</h3>
                        <div class="crop-meta">Duration: ${crop.duration}</div>
                        <p>${crop.desc}</p>
                    </div>
                </div>
            `;
            cropContainer.innerHTML += card;
        });

        // --- LIVE WEATHER API INTEGRATION (Nashik) ---
        async function fetchLiveWeather() {
            try {
                // Nashik Coordinates: Lat 19.9975, Lon 73.7898
                const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=19.9975&longitude=73.7898&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Asia%2FKolkata');
                const data = await response.json();
                
                const current = data.current;
                
                // Update HTML with live data
                document.getElementById('api-temp').innerText = `${Math.round(current.temperature_2m)}°C`;
                document.getElementById('api-humidity').innerHTML = `<i class="fa-solid fa-droplet" style="color: #2196f3; width: 20px;"></i> Humidity: ${current.relative_humidity_2m}%`;
                document.getElementById('api-wind').innerHTML = `<i class="fa-solid fa-wind" style="color: #78909c; width: 20px;"></i> Wind: ${current.wind_speed_10m} km/h`;
                
                // Interpret WMO Weather codes into text & FontAwesome icons
                let condition = "Clear";
                let icon = '<i class="fa-solid fa-sun" style="color: #ffb300; width: 20px;"></i>';
                const code = current.weather_code;
                
                if (code >= 1 && code <= 3) { 
                    condition = "Partly Cloudy"; 
                    icon = '<i class="fa-solid fa-cloud-sun" style="color: #ffb300; width: 20px;"></i>'; 
                }
                else if (code >= 45 && code <= 48) { 
                    condition = "Foggy"; 
                    icon = '<i class="fa-solid fa-smog" style="color: #b0bec5; width: 20px;"></i>'; 
                }
                else if (code >= 51 && code <= 67) { 
                    condition = "Rainy"; 
                    icon = '<i class="fa-solid fa-cloud-rain" style="color: #5c6bc0; width: 20px;"></i>'; 
                }
                else if (code >= 71 && code <= 77) { 
                    condition = "Snow"; 
                    icon = '<i class="fa-solid fa-snowflake" style="color: #81d4fa; width: 20px;"></i>'; 
                }
                else if (code >= 80 && code <= 99) { 
                    condition = "Stormy"; 
                    icon = '<i class="fa-solid fa-cloud-bolt" style="color: #546e7a; width: 20px;"></i>'; 
                }
                
                document.getElementById('api-condition').innerHTML = `${icon} Condition: ${condition}`;
                
            } catch (error) {
                console.error("Error fetching live weather:", error);
                // Fallback data if offline
                document.getElementById('api-temp').innerText = "34°C";
                document.getElementById('api-condition').innerHTML = '<i class="fa-solid fa-sun" style="color: #ffb300; width: 20px;"></i> Condition: Offline Data';
            }
        }

        // Trigger the weather fetch immediately
        fetchLiveWeather();

        // --- LIVE MARKET PRICES API INTEGRATION ---
        async function fetchMarketPrices() {
            try {
                // In a real scenario, this would be a fetch call to a real API like data.gov.in
                // const response = await fetch('https://api.example.com/agri/market-prices');
                // const data = await response.json();
                
                // Simulating an API response structure
                const mockAPIResponse = [
                    { name: "Wheat (Sharbati)", market: "Nashik, MH", basePrice: 2500, demand: "High Demand", tagColor: "" },
                    { name: "Cotton", market: "Nashik, MH", basePrice: 8010, demand: "Stable", tagColor: "background: #fff3e0; color: #e65100;" },
                    { name: "Arhar", market: "Nashik, MH", basePrice: 6000, demand: "High Demand", tagColor: "" },
                    { name: "Onion", market: "Nashik, MH", basePrice: 1300, demand: "Oversupply", tagColor: "background: #ffebee; color: #c62828;" }
                ];
                
                const tbody = document.getElementById('crop-prices-body');
                tbody.innerHTML = ''; // Clear loading state
                
                mockAPIResponse.forEach(item => {
                    // Simulate dynamic price changes +/- 5% for the demo
                    const fluctuation = (Math.random() * 0.1) - 0.05; 
                    const currentPrice = Math.round(item.basePrice * (1 + fluctuation));
                    const maxPrice = currentPrice + Math.round(Math.random() * 100);
                    const trendPercent = (Math.abs(fluctuation) * 100).toFixed(2);
                    const isUp = fluctuation > 0;
                    
                    const priceRange = item.name.includes("Wheat") ? `₹${currentPrice.toLocaleString()} - ${maxPrice.toLocaleString()}` : `₹${currentPrice.toLocaleString()}`;

                    const row = `
                        <tr>
                            <td><strong>${item.name}</strong></td>
                            <td>${item.market}</td>
                            <td>${priceRange}</td>
                            <td class="${isUp ? 'trend-up' : 'trend-down'}">
                                <i class="fa-solid fa-arrow-trend-${isUp ? 'up' : 'down'}"></i> ${isUp ? '+' : '-'}${trendPercent}%
                            </td>
                            <td><span class="tag" style="${item.tagColor}">${item.demand}</span></td>
                        </tr>
                    `;
                    tbody.innerHTML += row;
                });
            } catch (error) {
                console.error("Error fetching market prices:", error);
                document.getElementById('crop-prices-body').innerHTML = '<tr><td colspan="5" style="text-align: center; color: red;">Failed to load live prices.</td></tr>';
            }
        }

        // --- LIVE INPUT PRICES API INTEGRATION ---
        async function fetchInputPrices() {
            try {
                // Simulating API response for Farm Inputs & Equipment
                // const response = await fetch('https://api.example.com/agri/input-prices');
                // const data = await response.json();

                const mockAPIResponse = [
                    { name: "NPK 19:19:19 (Water Soluble)", category: "Fertilizer", basePrice: 3200, unit: "50kg", status: "In Stock", tagColor: "" },
                    { name: "Glyphosate 41% SL", category: "Herbicide / Pesticide", basePrice: 510, unit: "Liter", status: "Low Stock", tagColor: "background: #fff3e0; color: #e65100;" },
                    { name: "Drip Irrigation Kit (1 Acre)", category: "Irrigation", basePrice: 52500, unit: "", status: "In Stock", tagColor: "" },
                    { name: "Submersible Water Pump (5 HP)", category: "Equipment", basePrice: 23200, unit: "", status: "High Demand", tagColor: "background: #ffebee; color: #c62828;" }
                ];

                const tbody = document.getElementById('input-prices-body');
                tbody.innerHTML = '';
                
                mockAPIResponse.forEach(item => {
                    // Simulate dynamic price changes +/- 2%
                    const fluctuation = (Math.random() * 0.04) - 0.02; 
                    const currentPrice = Math.round(item.basePrice * (1 + fluctuation));
                    const trendPercent = (Math.abs(fluctuation) * 100).toFixed(2);
                    const isUp = fluctuation > 0;
                    
                    const unitStr = item.unit ? ` / ${item.unit}` : "";
                    
                    const row = `
                        <tr>
                            <td><strong>${item.name}</strong></td>
                            <td>${item.category}</td>
                            <td>₹${currentPrice.toLocaleString()}${unitStr}</td>
                            <td class="${isUp ? 'trend-up' : 'trend-down'}">
                                <i class="fa-solid fa-arrow-trend-${isUp ? 'up' : 'down'}"></i> ${isUp ? '+' : '-'}${trendPercent}%
                            </td>
                            <td><span class="tag" style="${item.tagColor}">${item.status}</span></td>
                        </tr>
                    `;
                    tbody.innerHTML += row;
                });
            } catch (error) {
                console.error("Error fetching input prices:", error);
                document.getElementById('input-prices-body').innerHTML = '<tr><td colspan="5" style="text-align: center; color: red;">Failed to load input prices.</td></tr>';
            }
        }

        // --- PLANT DISEASE DETECTION ---
        const CLASS_NAMES = [
            'Pepper__bell___Bacterial_spot', 'Pepper__bell___healthy', 
            'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 
            'Tomato_Bacterial_spot', 'Tomato_Early_blight', 'Tomato_Late_blight', 
            'Tomato_Leaf_Mold', 'Tomato_Septoria_leaf_spot', 
            'Tomato_Spider_mites_Two_spotted_spider_mite', 'Tomato__Target_Spot', 
            'Tomato__Tomato_YellowLeaf__Curl_Virus', 'Tomato__Tomato_mosaic_virus', 
            'Tomato_healthy'
        ];

        let diseaseModel;
        const modelStatusDiv = document.getElementById('model-status');
        const resultArea = document.getElementById('result-area');

        async function initDiseaseModel() {
            try {
                diseaseModel = await tf.loadLayersModel('./plant_disease_detection/model/model.json', { strict: false });
                modelStatusDiv.innerHTML = "<span style='color: #2e7d32;'><i class='fa-solid fa-check-circle'></i> AI Model Ready!</span>";
            } catch (e) {
                modelStatusDiv.innerHTML = "<span style='color: #e53935;'><i class='fa-solid fa-triangle-exclamation'></i> Failed to load model.</span>";
                console.error("Model load error:", e);
            }
        }

        async function predictDisease(imgElement) {
            if (!diseaseModel) {
                alert("AI Model is still loading or failed to load...");
                return;
            }

            modelStatusDiv.innerHTML = "<i class='fa-solid fa-spinner fa-spin'></i> Analyzing...";

            tf.tidy(() => {
                let tensor = tf.browser.fromPixels(imgElement)
                    .resizeNearestNeighbor([224, 224])
                    .toFloat()
                    .expandDims();
                
                // If model expects normalized inputs (0-1 or -1 to 1)
                // The Rescaling layer in model.json says: scale=0.007843 (1/127.5), offset=-1
                // We'll let the model's Rescaling layer handle the normalization 
                // BUT MobilenetV2 often outputs logits instead of probabilities if trained without Softmax activation.
                
                let predictions = diseaseModel.predict(tensor);
                
                // If output shape is [1, 15] logits, we apply Softmax to get percentages
                predictions = tf.softmax(predictions);
                const scores = predictions.dataSync();

                const maxScore = Math.max(...scores);
                const index = scores.indexOf(maxScore);

                const label = CLASS_NAMES[index].replace(/__/g, ' - ').replace(/_/g, ' ');
                const confidence = (maxScore * 100).toFixed(1);

                resultArea.innerHTML = `
                    <div style="color: var(--dark-green); font-size: 1.2rem; font-weight: 700; margin-bottom: 5px;">${label}</div>
                    <div style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600;">Confidence: ${confidence}%</div>
                `;
            });
        }

        document.getElementById('fileInput').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(event) {
                const img = document.getElementById('preview-image');
                const placeholder = document.getElementById('placeholder');
                
                img.src = event.target.result;
                img.style.display = 'block';
                placeholder.style.display = 'none';

                img.onload = () => predictDisease(img);
            }
            reader.readAsDataURL(file);
        });

        // Initialize APIs
        fetchMarketPrices();
        fetchInputPrices();
        initDiseaseModel();
        
        // Update data periodically to simulate live market changes (every 10 seconds for demo purposes)
        setInterval(() => {
            fetchMarketPrices();
            fetchInputPrices();
        }, 10000); 

        // --- FARMER DASHBOARD INTERACTIVITY & CHARTS ---
        const mainContent = document.getElementById('main-content');
        const userDashboardView = document.getElementById('user-dashboard-view');
        const accessDashboardBtn = document.getElementById('access-dashboard-btn');
        const backToHomeBtn = document.getElementById('back-to-home-btn');
        let chartsInitialized = false;

        accessDashboardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mainContent.style.display = 'none';
            userDashboardView.style.display = 'block';
            window.scrollTo(0, 0);
            
            if(!chartsInitialized) {
                initDashboardCharts();
                chartsInitialized = true;
            }
            
            // On mobile, close nav if clicking Access Dashboard
            if(navContainer.classList.contains('active')) {
                navContainer.classList.remove('active');
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });

        backToHomeBtn.addEventListener('click', () => {
             mainContent.style.display = 'block';
             userDashboardView.style.display = 'none';
             window.scrollTo(0, 0);
        });

        function initDashboardCharts() {
            // Financial Chart
            const financeCtx = document.getElementById('financeChart').getContext('2d');
            new Chart(financeCtx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [
                        {
                            label: 'Revenue (₹)',
                            data: [0, 0, 45000, 120000, 180000, 0],
                            backgroundColor: '#98a51a',
                            borderRadius: 6
                        },
                        {
                            label: 'Expenses (₹)',
                            data: [35000, 12000, 15000, 25000, 10000, 15000],
                            backgroundColor: '#c62828',
                            borderRadius: 6
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: { y: { beginAtZero: true } },
                    plugins: { legend: { position: 'top' } }
                }
            });

            // Crop Allocation Pie Chart
            const pieCtx = document.getElementById('cropPieChart').getContext('2d');
            new Chart(pieCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Wheat (2.5 Acres)', 'Onion (1.5 Acres)', 'Grapes (1.0 Acres)'],
                    datasets: [{
                        data: [50, 30, 20],
                        backgroundColor: ['#fbc02d', '#8e24aa', '#4caf50'],
                        borderWidth: 0,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom' } },
                    cutout: '65%'
                }
            });
        }

        // --- LANGUAGE TRANSLATION LOGIC ---
        const translations = {
            en: {
                nav_home: "Home", nav_market: "Market Prices", nav_weather: "Weather", nav_disease: "Plant Doctor", nav_schemes: "Gov Schemes", nav_library: "Knowledge Library", nav_dashboard: "Access Dashboard",
                hero_subtitle: "Agriculture Intelligence Platform", hero_title: "Rooted in Data,<br>Growing the Future.", hero_desc: "Overcoming the information gap for farmers. Get real-time crop market prices, accurate weather forecasts, and discover government support schemes all in one simplified platform.",
                hero_btn_market: "Explore Market Prices", hero_btn_weather: "Check Weather",
                market_title: "Today's Crop Market Prices", market_desc: "Stay updated with the latest market rates to make profitable selling decisions. Data updated hourly.",
                table_crop: "Crop Name", table_market: "Market (Mandi)", table_price: "Current Price (per Quintal)", table_trend: "Trend", table_status: "Status",
                inputs_title: "Farm Inputs & Equipment Prices", inputs_desc: "Track estimated market costs for essential fertilizers, pesticides, and irrigation tools to plan your seasonal budget.",
                table_item: "Item Name", table_category: "Category", table_avg_price: "Average Price", table_price_trend: "Price Trend", table_market_avail: "Market Availability",
                weather_title: "Weather Advisory for Farmers", weather_location: "Nashik District, Maharashtra", weather_current: "Current Weather", weather_rain_chance: "Rain: 0% for next 5 days",
                weather_advisory: "Weather Advisory", weather_warning: "Heatwave conditions expected this week. Temperatures above 35°C may affect crops.",
                weather_adv_1: "Harvest wheat immediately", weather_adv_2: "Provide irrigation during morning or evening", weather_adv_3: "Use mulching to reduce soil moisture loss",
                weather_crop_rec: "Crop Recommendations", crop_grapes: "Grapes:", rec_grapes: "Heat stress risk. Maintain drip irrigation.",
                crop_onion: "Onion & Garlic:", rec_onion: "Ideal time for harvesting and curing.", crop_wheat: "Wheat:", rec_wheat: "Harvest quickly to prevent grain shriveling.",
                crop_irrigation: "Irrigation:", rec_irrigation: "No rain expected — irrigate crops daily.", crop_soil: "Soil:", rec_soil: "Dry heat reduces soil moisture rapidly.",
                weather_tips_title: "Today's Farming Recommendation", weather_tips_time: "Best irrigation time:", or: "or", weather_tips_desc: "Early irrigation reduces evaporation and improves water absorption.",
                disease_title: "AI Plant Doctor", disease_desc: "Upload a photo of a diseased leaf and our AI will detect the issue instantly.",
                schemes_title: "Government Agri-Schemes", schemes_desc: "Empowering farmers through structured financial and technical support.",
                library_title: "Essential Crops Knowledge", library_desc: "A guide to widely cultivated and locally accessible crop varieties preferred by farmers."
            },
            hi: {
                nav_home: "होम", nav_market: "बाज़ार भाव", nav_weather: "मौसम", nav_disease: "हेल्थ चेकअप", nav_schemes: "सरकारी योजनाएं", nav_library: "फसल ज्ञान", nav_dashboard: "डैशबोर्ड देखें",
                hero_subtitle: "कृषि खुफिया मंच", hero_title: "डेटा से जुड़े,<br>भविष्य बढ़ाएं।", hero_desc: "किसानों के लिए जानकारी की कमी को दूर करना। वास्तविक समय के फसल बाजार मूल्य, सटीक मौसम पूर्वानुमान प्राप्त करें और एक सरल मंच में सरकारी सहायता योजनाओं की खोज करें।",
                hero_btn_market: "बाज़ार मूल्य खोजें", hero_btn_weather: "मौसम जांचें",
                market_title: "आज के फसल बाजार मूल्य", market_desc: "लाभदायक बिक्री निर्णय लेने के लिए नवीनतम बाजार दरों से खुद को अपडेट रखें। डेटा हर घंटे अपडेट किया गया।",
                table_crop: "फसल का नाम", table_market: "बाज़ार (मंडी)", table_price: "वर्तमान मूल्य (प्रति क्विंटल)", table_trend: "प्रवृत्ति", table_status: "स्थिति",
                inputs_title: "कृषि इनपुट एवं उपकरण की कीमतें", inputs_desc: "अपने मौसमी बजट की योजना बनाने के लिए आवश्यक उर्वरकों, कीटनाशकों और सिंचाई उपकरणों की अनुमानित बाज़ार लागत को ट्रैक करें।",
                table_item: "वस्तु का नाम", table_category: "श्रेणी", table_avg_price: "औसत मूल्य", table_price_trend: "मूल्य प्रवृत्ति", table_market_avail: "बाजार उपलब्धता",
                weather_title: "किसानों के लिए मौसम सलाह", weather_location: "नाशिक जिला, महाराष्ट्र", weather_current: "वर्तमान मौसम", weather_rain_chance: "बारिश: अगले 5 दिनों तक 0%",
                weather_advisory: "मौसम चेतावनी", weather_warning: "इस सप्ताह भीषण गर्मी रहने की आशंका है। 35°C से ऊपर का तापमान फसलों को प्रभावित कर सकता है।",
                weather_adv_1: "गेहूं की तुरंत कटाई करें", weather_adv_2: "सुबह या शाम को सिंचाई प्रदान करें", weather_adv_3: "मिट्टी की नमी को कम करने के लिए मल्चिंग का प्रयोग करें",
                weather_crop_rec: "फसल की सिफारिशें", crop_grapes: "अंगूर:", rec_grapes: "गर्मी के तनाव का ख़तरा. ड्रिप सिंचाई बनाए रखें.",
                crop_onion: "प्याज और लहसुन:", rec_onion: "कटाई और इलाज के लिए आदर्श समय।", crop_wheat: "गेहूँ:", rec_wheat: "अनाज को सिकुड़ने से बचाने के लिए तुरंत कटाई करें।",
                crop_irrigation: "सिंचाई:", rec_irrigation: "बारिश की उम्मीद नहीं — फसलों की रोजाना सिंचाई करें।", crop_soil: "मिट्टी:", rec_soil: "सूखी गर्मी मिट्टी की नमी को तेजी से कम कर देती है।",
                weather_tips_title: "आज की खेती की सिफारिश", weather_tips_time: "सिंचाई का सर्वोत्तम समय:", or: "या", weather_tips_desc: "जल्दी सिंचाई वाष्पीकरण को कम करती है और जल अवशोषण में सुधार करती है।",
                disease_title: "एआई प्लांट डॉक्टर", disease_desc: "बीमार पत्ती की तस्वीर अपलोड करें और हमारा एआई तुरंत समस्या का पता लगाएगा।",
                schemes_title: "सरकारी कृषि योजनाएं", schemes_desc: "संरचित वित्तीय और तकनीकी सहायता के माध्यम से किसानों को सशक्त बनाना।",
                library_title: "आवश्यक फसल ज्ञान", library_desc: "किसानों द्वारा पसंद की जाने वाली व्यापक रूप से खेती और स्थानीय रूप से सुलभ फसल किस्मों के लिए एक मार्गदर्शिका।"
            },
            mr: {
                nav_home: "होम", nav_market: "बाजार भाव", nav_weather: "हवामान", nav_disease: "वनस्पती डॉक्टर", nav_schemes: "सरकारी योजना", nav_library: "पीक ज्ञान", nav_dashboard: "डॅशबोर्ड उघडा",
                hero_subtitle: "कृषी माहिती मंच", hero_title: "डेटाशी जोडलेले,<br>भविष्य वाढवा.", hero_desc: "शेतकऱ्यांसाठी असलेली माहितीची कमतरता दूर करा. रिअल-टाइम पीक बाजार भाव, अचूक हवामान अंदाज आणि एका सोप्या प्लॅटफॉर्मवर सरकारी मदत योजना शोधा.",
                hero_btn_market: "बाजारभाव पहा", hero_btn_weather: "हवामान तपासा",
                market_title: "आजचे पीक बाजार भाव", market_desc: "फायदेशीर विक्रीचे निर्णय घेण्यासाठी नवीनतम बाजार दरांसह अद्ययावत रहा. डेटा दर तासाला अद्यतनित केला जातो.",
                table_crop: "पिकाचे नाव", table_market: "बाजार (मंडी)", table_price: "सध्याची किंमत (प्रति क्विंटल)", table_trend: "कल", table_status: "स्थिती",
                inputs_title: "शेती निविष्ठा आणि उपकरणांच्या किमती", inputs_desc: "आपल्या हंगामी बजेटची योजना करण्यासाठी आवश्यक खते, कीटकनाशके आणि सिंचन साधनांच्या अंदाजित बाजार खर्चाचा मागोवा घ्या.",
                table_item: "वस्तूचे नाव", table_category: "श्रेणी", table_avg_price: "सरासरी किंमत", table_price_trend: "किंमत कल", table_market_avail: "बाजार उपलब्धता",
                weather_title: "शेतकऱ्यांसाठी हवामान सल्ला", weather_location: "नाशिक जिल्हा, महाराष्ट्र", weather_current: "सध्याचे हवामान", weather_rain_chance: "पाऊस: पुढील ५ दिवसांसाठी ०%",
                weather_advisory: "हवामान सल्ला", weather_warning: "या आठवड्यात उष्णतेच्या लाटेची शक्यता आहे. ३५°C वरील तापमानाचा पिकांवर परिणाम होऊ शकतो.",
                weather_adv_1: "गव्हाची लवकरात लवकर काढणी करा", weather_adv_2: "सकाळ किंवा संध्याकाळी सिंचन प्रदान करा", weather_adv_3: "मातीतील ओलावा कमी होण्यापासून वाचवण्यासाठी मल्चिंग वापरा",
                weather_crop_rec: "पिकांच्या शिफारसी", crop_grapes: "द्राक्षे:", rec_grapes: "उष्णतेचा ताण धोका. ठिबक सिंचन राखा.",
                crop_onion: "कांदा आणि लसूण:", rec_onion: "काढणीसाठी आणि कोरडे करण्यासाठी आदर्श वेळ.", crop_wheat: "गहू:", rec_wheat: "दाणे सुकणे टाळण्यासाठी लवकर काढणी करा.",
                crop_irrigation: "सिंचन:", rec_irrigation: "पावसाची अपेक्षा नाही — पिकांना दररोज पाणी द्या.", crop_soil: "माती:", rec_soil: "कोरड्या उष्णतेमुळे मातीतील ओलावा वेगाने कमी होतो.",
                weather_tips_title: "आजची शेतकी शिफारस", weather_tips_time: "पाणी देण्याची सर्वोत्तम वेळ:", or: "किंवा", weather_tips_desc: "लवकर सिंचन बाष्पीभवन कमी करते आणि पाणी शोषण सुधारते.",
                disease_title: "एआय प्लांट डॉक्टर", disease_desc: "आजारी पानाच्या फोटोची नोंद करा आणि आमचे एआय लगेच समस्या शोधून काढेल.",
                schemes_title: "सरकारी कृषी योजना", schemes_desc: "संरचित आर्थिक आणि तांत्रिक मदतीद्वारे शेतकऱ्यांचे सक्षमीकरण करणे.",
                library_title: "आवश्यक पीक ज्ञान", library_desc: "शेतकऱ्यांनी पसंत केलेल्या आणि स्थानिक पातळीवर उपलब्ध असलेल्या पिकांच्या जातींसाठी एक मार्गदर्शक."
            }
        };

        const langSelect = document.getElementById('lang-select');
        
        langSelect.addEventListener('change', (e) => {
            const lang = e.target.value;
            setLanguage(lang);
        });

        function setLanguage(lang) {
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key]; 
                }
            });
        }

