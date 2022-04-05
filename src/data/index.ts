import { v4 as uuid } from 'uuid'

export const data = {
    categories: [
        {
            id: uuid(),
            name: 'Ecommerce',
            slug: 'ecommerce',
            image: `${window.location.origin}/images/categories/ecommerce.jpg`,
            data: [
                {
                    id: uuid(),
                    name: 'Electronic Devices',
                    slug: 'electronic-devices',
                    image: '',
                    data: [
                        {
                            id: uuid(),
                            name: 'Mobile Phones',
                            slug: 'mobile-phones',
                            image: '',
                            data: [
                                {
                                    id: uuid(),
                                    name: 'Smart Phones',
                                    slug: 'smart-phones',
                                    image: `${window.location.origin}/images/categories/ecommerce/smart-phones.jpg`
                                },
                                {
                                    id: uuid(),
                                    name: 'Feature Phones',
                                    slug: 'feature-phones',
                                    image: `${window.location.origin}/images/categories/ecommerce/feature-phones.jpg`
                                }
                            ]
                        },
                        {
                            id: uuid(),
                            name: 'Tablets',
                            slug: 'tablets',
                            image: `${window.location.origin}/images/categories/ecommerce/tablets.jpg`
                        },
                        {
                            id: uuid(),
                            name: 'Laptops',
                            slug: 'laptops',
                            image: '',
                            data: [
                                {
                                    id: uuid(),
                                    name: 'Gaming Laptops',
                                    slug: 'gaming-laptops',
                                    image: `${window.location.origin}/images/categories/ecommerce/gaming-laptops.jpg`
                                },
                                {
                                    id: uuid(),
                                    name: 'Traditional Laptops',
                                    slug: 'traditional-laptops',
                                    image: `${window.location.origin}/images/categories/ecommerce/traditional-laptops.jpg`
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: uuid(),
            name: 'Real Estate',
            slug: 'real-estate',
            image: `${window.location.origin}/images/categories/real-estate.jpg`,
            data: [
                {
                    id: uuid(),
                    name: 'Commercial',
                    slug: 'commercial',
                    image: `${window.location.origin}/images/categories/real-estate/commercial.jpg`
                },
                {
                    id: uuid(),
                    name: 'Residential',
                    slug: 'residential',
                    image: `${window.location.origin}/images/categories/real-estate/residential.jpg`
                }
            ]
        },
        {
            id: uuid(),
            name: 'Resturant',
            slug: 'resturant',
            image: `${window.location.origin}/images/categories/resturants.jpg`,
            data: [
                {
                    id: uuid(),
                    name: 'Fast Food',
                    slug: 'fast-food',
                    image: `${window.location.origin}/images/categories/resturant/fast-food.jpg`
                }
            ]
        },
        {
            id: uuid(),
            name: 'Tourism',
            slug: 'tourism',
            image: `${window.location.origin}/images/categories/tourism.jpg`,
            data: [
                {
                    id: uuid(),
                    name: 'Karachi',
                    slug: 'karachi',
                    image: `${window.location.origin}/images/categories/tourism/karachi.jpg`
                },
                {
                    id: uuid(),
                    name: 'Lahore',
                    slug: 'lahore',
                    image: `${window.location.origin}/images/categories/tourism/lahore.jpg`
                },
                {
                    id: uuid(),
                    name: 'Islamabad',
                    slug: 'islamabad',
                    image: `${window.location.origin}/images/categories/tourism/islamabad.jpg`
                },
                {
                    id: uuid(),
                    name: 'Naran',
                    slug: 'naran',
                    image: `${window.location.origin}/images/categories/tourism/naran.jpg`
                },
                {
                    id: uuid(),
                    name: 'Nathiagali',
                    slug: 'nathiagali',
                    image: `${window.location.origin}/images/categories/tourism/nathiagali.jpg`
                },
                {
                    id: uuid(),
                    name: 'Kalam',
                    slug: 'kalam',
                    image: `${window.location.origin}/images/categories/tourism/kalam.jpg`
                }
            ]
        },
        {
            id: uuid(),
            name: 'Healthcare',
            slug: 'healthcare',
            image: `${window.location.origin}/images/categories/healthcare.jpg`,
            data: [
                {
                    id: uuid(),
                    name: 'Hospital',
                    slug: 'hospital',
                    image: `${window.location.origin}/images/categories/healthcare/hospital.jpg`
                },
                {
                    id: uuid(),
                    name: 'Laboratory',
                    slug: 'laboratory',
                    image: `${window.location.origin}/images/categories/healthcare/laboratory.jpg`
                },
                {
                    id: uuid(),
                    name: 'Pharmacy',
                    slug: 'pharmacy',
                    image: `${window.location.origin}/images/categories/healthcare/pharmacy.jpg`
                },
                {
                    id: uuid(),
                    name: 'Dental Clinic',
                    slug: 'dental-clinic',
                    image: `${window.location.origin}/images/categories/healthcare/dental-clinic.jpg`
                },
                {
                    id: uuid(),
                    name: 'Optician',
                    slug: 'optician',
                    image: `${window.location.origin}/images/categories/healthcare/optician.jpg`
                }
            ]
        },
        {
            id: uuid(),
            name: 'Education',
            slug: 'education',
            image: `${window.location.origin}/images/categories/education.jpg`,
            data: [
                {
                    id: uuid(),
                    name: 'Matriculation',
                    slug: 'matriculation',
                    image: `${window.location.origin}/images/categories/education/matriculation.jpg`
                },
                {
                    id: uuid(),
                    name: 'Intermediate',
                    slug: 'intermediate',
                    image: `${window.location.origin}/images/categories/education/intermediate.jpg`
                },
                {
                    id: uuid(),
                    name: 'O Levels',
                    slug: 'o-levels',
                    image: `${window.location.origin}/images/categories/education/o-levels.jpg`
                },
                {
                    id: uuid(),
                    name: 'A Levels',
                    slug: 'a-levels',
                    image: `${window.location.origin}/images/categories/education/a-levels.jpg`
                },
                {
                    id: uuid(),
                    name: 'University',
                    slug: 'university',
                    image: '',
                    data: [
                        {
                            id: uuid(),
                            name: 'BS Computer Science',
                            slug: 'bs-computer-science',
                            image: `${window.location.origin}/images/categories/education/bs-computer-science.jpg`
                        }
                    ]
                }
            ]
        },
        {
            id: uuid(),
            name: 'Telecom Network',
            slug: 'telecom-network',
            image: `${window.location.origin}/images/categories/telecom-network.jpg`,
            data: [
                {
                    id: uuid(),
                    name: 'Call',
                    slug: 'call',
                    image: `${window.location.origin}/images/categories/telecom/call.jpg`
                },
                {
                    id: uuid(),
                    name: 'SMS',
                    slug: 'sms',
                    image: `${window.location.origin}/images/categories/telecom/sms.jpg`
                },
                {
                    id: uuid(),
                    name: 'Internet',
                    slug: 'internet',
                    image: `${window.location.origin}/images/categories/telecom/internet.jpg`
                },
                {
                    id: uuid(),
                    name: 'Hybrid',
                    slug: 'hybrid',
                    image: `${window.location.origin}/images/categories/telecom/hybrid.jpg`
                }
            ]
        },
        {
            id: uuid(),
            name: 'Transport',
            slug: 'transport',
            image: `${window.location.origin}/images/categories/transport.jpg`,
            data: [
                {
                    id: uuid(),
                    name: 'Bus',
                    slug: 'bus',
                    image: `${window.location.origin}/images/categories/transport/bus.jpg`
                },
                {
                    id: uuid(),
                    name: 'Airplane',
                    slug: 'airplane',
                    image: `${window.location.origin}/images/categories/transport/airplane.jpg`
                }
            ]
        },
        {
            id: uuid(),
            name: 'Companies',
            slug: 'companies',
            image: `${window.location.origin}/images/categories/companies.jpg`,
            data: [
                {
                    id: uuid(),
                    name: 'HR',
                    slug: 'hr',
                    image: `${window.location.origin}/images/categories/companies/hr.jpg`
                },
                {
                    id: uuid(),
                    name: 'IT',
                    slug: 'it',
                    image: `${window.location.origin}/images/categories/companies/it.jpg`
                }
            ]
        }
    ],
    top10Items: {
        ecommerce: {
            'smart-phones': [
                {
                    id: uuid(),
                    name: 'Apple',
                    slug: 'apple',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple.jpg`,
                    points: 995,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: [
                        {
                            id: uuid(),
                            name: 'iPhone 13 Pro Max',
                            slug: 'iphone-13-pro-max',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5,
                            productDetails: {
                                details: `The iPhone 13 Pro Max is Apple's biggest iPhone, but it doens't have any advantages over the iPhone 13 Pro in terms of features, unlike in previous generations. It's heavy and unwieldy, but the big display is great for games and the increased battery capacity allows for nearly two full days of regular use. The display gets a 120Hz refresh rate, but there's still an unsightly notch that interferes with movies. Performance is great thanks to the A15 Bionic SoC. You can choose betweeen 128GB, 256GB, 512GB and 1TB storage options. The main new features are camera-related: Cinematic Mode and Photographic Styles. The camera hardware has also been improved, compared to the previous generation. You can now take macros and the optical zoom goes up to 3X. Although incredibly expensive, the iPhone 13 Pro Max represents the best of the best in the iPhone lineup.`,
                                specifications: [
                                    {
                                        title: 'General Features',
                                        points: [
                                            { key: 'Release Date', value: '2021-03-24' },
                                            { key: 'SIM Support', value: 'Dual SIM (nano-SIM and eSIM)' },
                                            { key: 'Phone Dimensions', value: '160.8 x 78.1 x 7.7 mm' },
                                            { key: 'Phone Weight', value: '240 g' },
                                            { key: 'Operating System', value: 'IOS 15s' }
                                        ]
                                    },
                                    {
                                        title: ' Displays',
                                        points: [
                                            { key: 'Screen Size', value: '6.7 Inches' },
                                            { key: 'Screen Resolution', value: '1284 x 2778 Pixels' },
                                            { key: 'Screen Type', value: 'Super Retina XDR OLED Touchscreen, Multitouch' },
                                            {
                                                key: 'Screen Protection',
                                                value: 'Scratch-resistant ceramic glass, oleophobic coating'
                                            }
                                        ]
                                    },
                                    {
                                        title: 'Memory',
                                        points: [
                                            { key: 'Internal Memory', value: '128/256/512 GB' },
                                            { key: 'RAM', value: '8 GB' },
                                            { key: 'Card Slot', value: 'No' }
                                        ]
                                    },
                                    {
                                        title: 'Performance',
                                        points: [
                                            { key: 'Processor', value: 'Apple A15 Bionic (5 nm)' },
                                            { key: 'GPU', value: 'Apple GPU (8-core graphics)' }
                                        ]
                                    },
                                    {
                                        title: 'Battery',
                                        points: [{ key: 'Type', value: 'Li-Ion 4352 mAh, non-removable' }]
                                    },
                                    {
                                        title: 'Camera',
                                        points: [
                                            { key: 'Front Camera', value: '12 MP + 12MP' },
                                            { key: 'Front Flash Light', value: 'No' },
                                            { key: 'Front Video Recording', value: '1080p@30/60/120/240fps' },
                                            { key: 'Back Flash Light', value: 'Yes' },
                                            { key: 'Back Camera', value: '12 MP + 12MP + 12 MP' },
                                            { key: 'Back Video Recording', value: '1080p@30/60/120/240fps' }
                                        ]
                                    },
                                    {
                                        title: 'Connectivity',
                                        points: [
                                            { key: 'Bluetooth', value: 'Yes' },
                                            { key: '3G', value: 'Yes' },
                                            { key: '4G/LTE', value: 'Yes' },
                                            { key: '5G', value: 'Yes' },
                                            { key: 'Radio', value: 'No' },
                                            { key: 'WiFi', value: 'Yes' },
                                            { key: 'NFC', value: 'Yes' }
                                        ]
                                    }
                                ],
                                images: [
                                    {
                                        title: 'iPhone 13 Pro Max Front',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max Back',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back-front.jpg`
                                    }
                                ]
                            }
                        },
                        {
                            id: uuid(),
                            name: 'iPhone 13',
                            slug: 'iphone-13',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5,
                            productDetails: {
                                details: `The iPhone 13 Pro Max is Apple's biggest iPhone, but it doens't have any advantages over the iPhone 13 Pro in terms of features, unlike in previous generations. It's heavy and unwieldy, but the big display is great for games and the increased battery capacity allows for nearly two full days of regular use. The display gets a 120Hz refresh rate, but there's still an unsightly notch that interferes with movies. Performance is great thanks to the A15 Bionic SoC. You can choose betweeen 128GB, 256GB, 512GB and 1TB storage options. The main new features are camera-related: Cinematic Mode and Photographic Styles. The camera hardware has also been improved, compared to the previous generation. You can now take macros and the optical zoom goes up to 3X. Although incredibly expensive, the iPhone 13 Pro Max represents the best of the best in the iPhone lineup.`,
                                specifications: [
                                    {
                                        title: 'General Features',
                                        points: [
                                            { key: 'Release Date', value: '2021-03-24' },
                                            { key: 'SIM Support', value: 'Dual SIM (nano-SIM and eSIM)' },
                                            { key: 'Phone Dimensions', value: '160.8 x 78.1 x 7.7 mm' },
                                            { key: 'Phone Weight', value: '240 g' },
                                            { key: 'Operating System', value: 'IOS 15s' }
                                        ]
                                    },
                                    {
                                        title: ' Displays',
                                        points: [
                                            { key: 'Screen Size', value: '6.7 Inches' },
                                            { key: 'Screen Resolution', value: '1284 x 2778 Pixels' },
                                            { key: 'Screen Type', value: 'Super Retina XDR OLED Touchscreen, Multitouch' },
                                            {
                                                key: 'Screen Protection',
                                                value: 'Scratch-resistant ceramic glass, oleophobic coating'
                                            }
                                        ]
                                    }
                                ],
                                images: [
                                    {
                                        title: 'iPhone 13 Pro Max Front',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max Back',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back-front.jpg`
                                    }
                                ]
                            }
                        },
                        {
                            id: uuid(),
                            name: 'iPhone 13 Pro',
                            slug: 'iphone-13-pro',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5,
                            productDetails: {
                                details: `The iPhone 13 Pro has all the same hardware as the iPhone 13 Pro Max except for a smaller battery and display. You get sensor-shift stabilisation for the primary camera, and for the first time, you can take macro photos. Optical zoom also goes up to 3X. Apple has introduced new camera features, Cinematic Mode and Photographic Styles. Beyond that, the new A15 Bionic SoC delivers excellent performance. Storage goes up to 1TB, though the top-end variant is extremely expensive. The 120Hz ProMotion display is a big improvement but there's still an awkward notch that can be distracting. Games and apps run very well, and the stereo speakers are also quite good. Construction quality is excellent and the iPhone 13 Pro is easier to hold and use than its bigger sibling.`,
                                specifications: [
                                    {
                                        title: 'General Features',
                                        points: [
                                            { key: 'Release Date', value: '2021-03-24' },
                                            { key: 'SIM Support', value: 'Dual SIM (nano-SIM and eSIM)' },
                                            { key: 'Phone Dimensions', value: '160.8 x 78.1 x 7.7 mm' },
                                            { key: 'Phone Weight', value: '240 g' },
                                            { key: 'Operating System', value: 'IOS 15s' }
                                        ]
                                    },
                                    {
                                        title: 'Displays',
                                        points: [
                                            { key: 'Screen Size', value: '6.7 Inches' },
                                            { key: 'Screen Resolution', value: '1284 x 2778 Pixels' },
                                            { key: 'Screen Type', value: 'Super Retina XDR OLED Touchscreen, Multitouch' },
                                            {
                                                key: 'Screen Protection',
                                                value: 'Scratch-resistant ceramic glass, oleophobic coating'
                                            }
                                        ]
                                    },
                                    {
                                        title: 'Memory',
                                        points: [
                                            { key: 'Internal Memory', value: '128/256/512 GB' },
                                            { key: 'RAM', value: '8 GB' },
                                            { key: 'Card Slot', value: 'No' }
                                        ]
                                    },
                                    {
                                        title: 'Performance',
                                        points: [
                                            { key: 'Processor', value: 'Apple A15 Bionic (5 nm)' },
                                            { key: 'GPU', value: 'Apple GPU (8-core graphics)' }
                                        ]
                                    },
                                    {
                                        title: 'Battery',
                                        points: [{ key: 'Type', value: 'Li-Ion 4352 mAh, non-removable' }]
                                    },
                                    {
                                        title: 'Camera',
                                        points: [
                                            { key: 'Front Camera', value: '12 MP + 12MP' },
                                            { key: 'Front Flash Light', value: 'No' },
                                            { key: 'Front Video Recording', value: '1080p@30/60/120/240fps' },
                                            { key: 'Back Flash Light', value: 'Yes' },
                                            { key: 'Back Camera', value: '12 MP + 12MP + 12 MP' },
                                            { key: 'Back Video Recording', value: '1080p@30/60/120/240fps' }
                                        ]
                                    },
                                    {
                                        title: 'Connectivity',
                                        points: [
                                            { key: 'Bluetooth', value: 'Yes' },
                                            { key: '3G', value: 'Yes' },
                                            { key: '4G/LTE', value: 'Yes' },
                                            { key: '5G', value: 'Yes' },
                                            { key: 'Radio', value: 'No' },
                                            { key: 'WiFi', value: 'Yes' },
                                            { key: 'NFC', value: 'Yes' }
                                        ]
                                    }
                                ],
                                images: [
                                    {
                                        title: 'iPhone 13 Pro Front',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro/iphone-13-pro-front.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Back',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro/iphone-13-pro-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro/iphone-13-pro-front-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro/iphone-13-pro-back-front.jpg`
                                    }
                                ]
                            }
                        },
                        {
                            id: uuid(),
                            name: 'iPhone 13 Mini',
                            slug: 'iphone-13-mini',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-mini.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5,
                            productDetails: {
                                details: `The iPhone 13 Pro Max is Apple's biggest iPhone, but it doens't have any advantages over the iPhone 13 Pro in terms of features, unlike in previous generations. It's heavy and unwieldy, but the big display is great for games and the increased battery capacity allows for nearly two full days of regular use. The display gets a 120Hz refresh rate, but there's still an unsightly notch that interferes with movies. Performance is great thanks to the A15 Bionic SoC. You can choose betweeen 128GB, 256GB, 512GB and 1TB storage options. The main new features are camera-related: Cinematic Mode and Photographic Styles. The camera hardware has also been improved, compared to the previous generation. You can now take macros and the optical zoom goes up to 3X. Although incredibly expensive, the iPhone 13 Pro Max represents the best of the best in the iPhone lineup.`,
                                specifications: [
                                    {
                                        title: 'General Features',
                                        points: [
                                            { key: 'Release Date', value: '2021-03-24' },
                                            { key: 'SIM Support', value: 'Dual SIM (nano-SIM and eSIM)' },
                                            { key: 'Phone Dimensions', value: '160.8 x 78.1 x 7.7 mm' },
                                            { key: 'Phone Weight', value: '240 g' },
                                            { key: 'Operating System', value: 'IOS 15s' }
                                        ]
                                    },
                                    {
                                        title: ' Displays',
                                        points: [
                                            { key: 'Screen Size', value: '6.7 Inches' },
                                            { key: 'Screen Resolution', value: '1284 x 2778 Pixels' },
                                            { key: 'Screen Type', value: 'Super Retina XDR OLED Touchscreen, Multitouch' },
                                            {
                                                key: 'Screen Protection',
                                                value: 'Scratch-resistant ceramic glass, oleophobic coating'
                                            }
                                        ]
                                    }
                                ],
                                images: [
                                    {
                                        title: 'iPhone 13 Pro Max Front',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max Back',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back-front.jpg`
                                    }
                                ]
                            }
                        },
                        {
                            id: uuid(),
                            name: 'iPhone SE (2022)',
                            slug: 'iphone-se-2022',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-se-2022.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5,
                            productDetails: {
                                details: `The iPhone 13 Pro Max is Apple's biggest iPhone, but it doens't have any advantages over the iPhone 13 Pro in terms of features, unlike in previous generations. It's heavy and unwieldy, but the big display is great for games and the increased battery capacity allows for nearly two full days of regular use. The display gets a 120Hz refresh rate, but there's still an unsightly notch that interferes with movies. Performance is great thanks to the A15 Bionic SoC. You can choose betweeen 128GB, 256GB, 512GB and 1TB storage options. The main new features are camera-related: Cinematic Mode and Photographic Styles. The camera hardware has also been improved, compared to the previous generation. You can now take macros and the optical zoom goes up to 3X. Although incredibly expensive, the iPhone 13 Pro Max represents the best of the best in the iPhone lineup.`,
                                specifications: [
                                    {
                                        title: 'General Features',
                                        points: [
                                            { key: 'Release Date', value: '2021-03-24' },
                                            { key: 'SIM Support', value: 'Dual SIM (nano-SIM and eSIM)' },
                                            { key: 'Phone Dimensions', value: '160.8 x 78.1 x 7.7 mm' },
                                            { key: 'Phone Weight', value: '240 g' },
                                            { key: 'Operating System', value: 'IOS 15s' }
                                        ]
                                    },
                                    {
                                        title: ' Displays',
                                        points: [
                                            { key: 'Screen Size', value: '6.7 Inches' },
                                            { key: 'Screen Resolution', value: '1284 x 2778 Pixels' },
                                            { key: 'Screen Type', value: 'Super Retina XDR OLED Touchscreen, Multitouch' },
                                            {
                                                key: 'Screen Protection',
                                                value: 'Scratch-resistant ceramic glass, oleophobic coating'
                                            }
                                        ]
                                    }
                                ],
                                images: [
                                    {
                                        title: 'iPhone 13 Pro Max Front',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max Back',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back-front.jpg`
                                    }
                                ]
                            }
                        },
                        {
                            id: uuid(),
                            name: 'iPhone 12 Mini',
                            slug: 'iphone-12-mini',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-12-mini.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5,
                            productDetails: {
                                details: `The iPhone 13 Pro Max is Apple's biggest iPhone, but it doens't have any advantages over the iPhone 13 Pro in terms of features, unlike in previous generations. It's heavy and unwieldy, but the big display is great for games and the increased battery capacity allows for nearly two full days of regular use. The display gets a 120Hz refresh rate, but there's still an unsightly notch that interferes with movies. Performance is great thanks to the A15 Bionic SoC. You can choose betweeen 128GB, 256GB, 512GB and 1TB storage options. The main new features are camera-related: Cinematic Mode and Photographic Styles. The camera hardware has also been improved, compared to the previous generation. You can now take macros and the optical zoom goes up to 3X. Although incredibly expensive, the iPhone 13 Pro Max represents the best of the best in the iPhone lineup.`,
                                specifications: [
                                    {
                                        title: 'General Features',
                                        points: [
                                            { key: 'Release Date', value: '2021-03-24' },
                                            { key: 'SIM Support', value: 'Dual SIM (nano-SIM and eSIM)' },
                                            { key: 'Phone Dimensions', value: '160.8 x 78.1 x 7.7 mm' },
                                            { key: 'Phone Weight', value: '240 g' },
                                            { key: 'Operating System', value: 'IOS 15s' }
                                        ]
                                    },
                                    {
                                        title: ' Displays',
                                        points: [
                                            { key: 'Screen Size', value: '6.7 Inches' },
                                            { key: 'Screen Resolution', value: '1284 x 2778 Pixels' },
                                            { key: 'Screen Type', value: 'Super Retina XDR OLED Touchscreen, Multitouch' },
                                            {
                                                key: 'Screen Protection',
                                                value: 'Scratch-resistant ceramic glass, oleophobic coating'
                                            }
                                        ]
                                    }
                                ],
                                images: [
                                    {
                                        title: 'iPhone 13 Pro Max Front',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max Back',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back-front.jpg`
                                    }
                                ]
                            }
                        },
                        {
                            id: uuid(),
                            name: 'iPhone 12',
                            slug: 'iphone-12',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-12.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5,
                            productDetails: {
                                details: `The iPhone 13 Pro Max is Apple's biggest iPhone, but it doens't have any advantages over the iPhone 13 Pro in terms of features, unlike in previous generations. It's heavy and unwieldy, but the big display is great for games and the increased battery capacity allows for nearly two full days of regular use. The display gets a 120Hz refresh rate, but there's still an unsightly notch that interferes with movies. Performance is great thanks to the A15 Bionic SoC. You can choose betweeen 128GB, 256GB, 512GB and 1TB storage options. The main new features are camera-related: Cinematic Mode and Photographic Styles. The camera hardware has also been improved, compared to the previous generation. You can now take macros and the optical zoom goes up to 3X. Although incredibly expensive, the iPhone 13 Pro Max represents the best of the best in the iPhone lineup.`,
                                specifications: [
                                    {
                                        title: 'General Features',
                                        points: [
                                            { key: 'Release Date', value: '2021-03-24' },
                                            { key: 'SIM Support', value: 'Dual SIM (nano-SIM and eSIM)' },
                                            { key: 'Phone Dimensions', value: '160.8 x 78.1 x 7.7 mm' },
                                            { key: 'Phone Weight', value: '240 g' },
                                            { key: 'Operating System', value: 'IOS 15s' }
                                        ]
                                    },
                                    {
                                        title: ' Displays',
                                        points: [
                                            { key: 'Screen Size', value: '6.7 Inches' },
                                            { key: 'Screen Resolution', value: '1284 x 2778 Pixels' },
                                            { key: 'Screen Type', value: 'Super Retina XDR OLED Touchscreen, Multitouch' },
                                            {
                                                key: 'Screen Protection',
                                                value: 'Scratch-resistant ceramic glass, oleophobic coating'
                                            }
                                        ]
                                    }
                                ],
                                images: [
                                    {
                                        title: 'iPhone 13 Pro Max Front',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max Back',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back-front.jpg`
                                    }
                                ]
                            }
                        },
                        {
                            id: uuid(),
                            name: 'iPhone 11',
                            slug: 'iphone-11',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-11.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5,
                            productDetails: {
                                details: `The iPhone 13 Pro Max is Apple's biggest iPhone, but it doens't have any advantages over the iPhone 13 Pro in terms of features, unlike in previous generations. It's heavy and unwieldy, but the big display is great for games and the increased battery capacity allows for nearly two full days of regular use. The display gets a 120Hz refresh rate, but there's still an unsightly notch that interferes with movies. Performance is great thanks to the A15 Bionic SoC. You can choose betweeen 128GB, 256GB, 512GB and 1TB storage options. The main new features are camera-related: Cinematic Mode and Photographic Styles. The camera hardware has also been improved, compared to the previous generation. You can now take macros and the optical zoom goes up to 3X. Although incredibly expensive, the iPhone 13 Pro Max represents the best of the best in the iPhone lineup.`,
                                specifications: [
                                    {
                                        title: 'General Features',
                                        points: [
                                            { key: 'Release Date', value: '2021-03-24' },
                                            { key: 'SIM Support', value: 'Dual SIM (nano-SIM and eSIM)' },
                                            { key: 'Phone Dimensions', value: '160.8 x 78.1 x 7.7 mm' },
                                            { key: 'Phone Weight', value: '240 g' },
                                            { key: 'Operating System', value: 'IOS 15s' }
                                        ]
                                    },
                                    {
                                        title: ' Displays',
                                        points: [
                                            { key: 'Screen Size', value: '6.7 Inches' },
                                            { key: 'Screen Resolution', value: '1284 x 2778 Pixels' },
                                            { key: 'Screen Type', value: 'Super Retina XDR OLED Touchscreen, Multitouch' },
                                            {
                                                key: 'Screen Protection',
                                                value: 'Scratch-resistant ceramic glass, oleophobic coating'
                                            }
                                        ]
                                    }
                                ],
                                images: [
                                    {
                                        title: 'iPhone 13 Pro Max Front',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max Back',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-front-back.jpg`
                                    },
                                    {
                                        title: 'iPhone 13 Pro Max',
                                        url: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple/iphone-13-pro-max/iphone-13-pro-max-back-front.jpg`
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: uuid(),
                    name: 'Samsung',
                    slug: 'samsung',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/samsung.jpg`,
                    points: 900,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: [
                        {
                            id: uuid(),
                            name: 'S22 Ultra',
                            slug: 's22-ultra',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/samsung/s22-ultra.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        },
                        {
                            id: uuid(),
                            name: 'S22',
                            slug: 's22',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/samsung/s22.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        },
                        {
                            id: uuid(),
                            name: 'S22 Plus',
                            slug: 's22-plus',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/samsung/s22-plus.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        },
                        {
                            id: uuid(),
                            name: 'Galaxy Z Fold 3',
                            slug: 'galaxy-z-fold-3',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/samsung/galaxy-z-fold-3.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        },
                        {
                            id: uuid(),
                            name: 'Galaxy A52 5G',
                            slug: 'galaxy-a52-5g',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/samsung/galaxy-a52-5g.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        },
                        {
                            id: uuid(),
                            name: 'Galaxy S21 FE',
                            slug: 'galaxy-s21-fe',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/samsung/galaxy-s21-fe.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        },
                        {
                            id: uuid(),
                            name: 'Galaxy A32 5G',
                            slug: 'galaxy-a32-5g',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/samsung/galaxy-a32-5g.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        }
                    ]
                },
                {
                    id: uuid(),
                    name: 'Google',
                    slug: 'google',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/google.jpg`,
                    points: 883,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: [
                        {
                            id: uuid(),
                            name: 'Pixel 6 Pro',
                            slug: 'pixel-6-pro',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/google/pixel-6-pro.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        },
                        {
                            id: uuid(),
                            name: 'Pixel 6',
                            slug: 'pixel-6',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/google/pixel-6.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        },
                        {
                            id: uuid(),
                            name: 'Pixel 5',
                            slug: 'pixel-5',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/google/pixel-5.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        },
                        {
                            id: uuid(),
                            name: 'Pixel 5a',
                            slug: 'pixel-5a',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/google/pixel-5a.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        },
                        {
                            id: uuid(),
                            name: 'Pixel 4a',
                            slug: 'pixel-4a',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/google/pixel-4a.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        },
                        {
                            id: uuid(),
                            name: 'Pixel 4 XL',
                            slug: 'pixel-4-xl',
                            avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/google/pixel-4-xl.jpg`,
                            points: 995,
                            correctAnswers: 4,
                            totalQuestions: 5
                        }
                    ]
                },
                {
                    id: uuid(),
                    name: 'OnePlus',
                    slug: 'oneplus',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/oneplus.jpg`,
                    points: 700,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Xiaomi',
                    slug: 'xiaomi',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/xiaomi.jpg`,
                    points: 699,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Redmi',
                    slug: 'redmi',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/redmi.jpg`,
                    points: 632,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Realme',
                    slug: 'realme',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/realme.jpg`,
                    points: 601,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Infix',
                    slug: 'infix',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/infix.jpg`,
                    points: 450,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Oppo',
                    slug: 'oppo',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/oppo.jpg`,
                    points: 444,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Poco',
                    slug: 'poco',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/poco.jpg`,
                    points: 386,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                }
            ],
            'feature-phones': [
                {
                    id: uuid(),
                    name: 'Samsung',
                    slug: 'samsung',
                    avatar: '',
                    points: 995,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Nokia',
                    slug: 'nokia',
                    avatar: '',
                    points: 900,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                }
                // {
                //     id: 2,
                //     name: 'Google',
                //     slug: '',
                //     avatar: '',
                //     points: 883,
                //     correctAnswers: 4,
                //     totalQuestions: 5,
                //     top10Products: []
                // }
            ],
            tablets: [
                {
                    id: uuid(),
                    name: 'Apple',
                    slug: 'apple',
                    avatar: '',
                    points: 995,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Samsung',
                    slug: 'samsung',
                    avatar: '',
                    points: 900,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Amazon',
                    slug: 'amazon',
                    avatar: '',
                    points: 883,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Lenovo',
                    slug: 'lenovo',
                    avatar: '',
                    points: 700,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Huawei',
                    slug: 'huawei',
                    avatar: '',
                    points: 699,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Microsoft',
                    slug: 'microsoft',
                    avatar: '',
                    points: 632,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Asus',
                    slug: 'asus',
                    avatar: '',
                    points: 601,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Google',
                    slug: 'google',
                    avatar: '',
                    points: 450,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                }
            ],
            'gaming-laptops': [
                {
                    id: uuid(),
                    name: 'Asus',
                    slug: 'asus',
                    avatar: '',
                    points: 995,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Razer',
                    slug: 'razer',
                    avatar: '',
                    points: 900,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Legion',
                    slug: 'legion',
                    avatar: '',
                    points: 883,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Alienware',
                    slug: 'alienware',
                    avatar: '',
                    points: 700,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Acer',
                    slug: 'acer',
                    avatar: '',
                    points: 699,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'HP',
                    slug: 'hp',
                    avatar: '',
                    points: 632,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'MSI',
                    slug: 'msi',
                    avatar: '',
                    points: 601,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                }
            ],
            'traditional-laptops': [
                {
                    id: uuid(),
                    name: 'Apple',
                    slug: 'apple',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/apple.jpg`,
                    points: 995,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'HP',
                    slug: 'hp',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/hp.jpg`,
                    points: 900,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Lenovo',
                    slug: 'lenovo',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/lenovo.jpg`,
                    points: 883,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Dell',
                    slug: 'dell',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/dell.jpg`,
                    points: 700,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Acer',
                    slug: 'acer',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/acer.jpg`,
                    points: 699,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Asus',
                    slug: 'asus',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/asus.jpg`,
                    points: 632,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'MSI',
                    slug: 'msi',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/msi.jpg`,
                    points: 601,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Microsoft Surface',
                    slug: 'microsoft-surface',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/microsoft-surface.jpg`,
                    points: 450,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                }
            ]
        },
        'telecom-network': {
            call: [
                {
                    id: uuid(),
                    name: 'Ufone',
                    slug: 'ufone',
                    avatar: '',
                    points: 995,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Jazz',
                    slug: 'jazz',
                    avatar: '',
                    points: 900,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Zong',
                    slug: 'zong',
                    avatar: '',
                    points: 883,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Telenor',
                    slug: 'telenor',
                    avatar: '',
                    points: 700,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Warid',
                    slug: 'warid',
                    avatar: '',
                    points: 699,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                }
            ],
            sms: [
                {
                    id: uuid(),
                    name: 'Ufone',
                    slug: 'ufone',
                    avatar: '',
                    points: 995,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Jazz',
                    slug: 'jazz',
                    avatar: '',
                    points: 900,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Zong',
                    slug: 'zong',
                    avatar: '',
                    points: 883,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Telenor',
                    slug: 'telenor',
                    avatar: '',
                    points: 700,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Warid',
                    slug: 'warid',
                    avatar: '',
                    points: 699,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                }
            ],
            internet: [
                {
                    id: uuid(),
                    name: 'Jazz',
                    slug: 'jazz',
                    avatar: '',
                    points: 995,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Zong',
                    slug: 'zong',
                    avatar: '',
                    points: 900,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Telenor',
                    slug: 'telenor',
                    avatar: '',
                    points: 883,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Ufone',
                    slug: 'ufone',
                    avatar: '',
                    points: 700,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Warid',
                    slug: 'warid',
                    avatar: '',
                    points: 699,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                }
            ],
            hybrid: [
                {
                    id: uuid(),
                    name: 'Ufone',
                    slug: 'ufone',
                    avatar: '',
                    points: 995,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Jazz',
                    slug: 'jazz',
                    avatar: '',
                    points: 900,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Zong',
                    slug: 'zong',
                    avatar: '',
                    points: 883,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Telenor',
                    slug: 'telenor',
                    avatar: '',
                    points: 700,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                },
                {
                    id: uuid(),
                    name: 'Warid',
                    slug: 'warid',
                    avatar: '',
                    points: 699,
                    correctAnswers: 4,
                    totalQuestions: 5,
                    top10Products: []
                }
            ]
        }
    }
}
