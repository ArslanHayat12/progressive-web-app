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
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/apple.jpg`,
                    points: 995,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Samsung',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/samsung.jpg`,
                    points: 900,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Google',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/google.jpg`,
                    points: 883,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'OnePlus',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/oneplus.jpg`,
                    points: 700,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Xiaomi',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/xiaomi.jpg`,
                    points: 699,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Redmi',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/redmi.jpg`,
                    points: 632,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Realme',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/realme.jpg`,
                    points: 601,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Infix',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/infix.jpg`,
                    points: 450,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Oppo',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/oppo.jpg`,
                    points: 444,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Poco',
                    avatar: `${window.location.origin}/images/categories/ecommerce/smart-phones/poco.jpg`,
                    points: 386,
                    correctAnswers: 4,
                    totalQuestions: 5
                }
            ],
            'feature-phones': [
                { id: uuid(), name: 'Samsung', avatar: '', points: 995, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Nokia', avatar: '', points: 900, correctAnswers: 4, totalQuestions: 5 }
                // { id: 2, name: 'Google', avatar: '', points: 883, correctAnswers: 4, totalQuestions: 5 }
            ],
            tablets: [
                { id: uuid(), name: 'Apple', avatar: '', points: 995, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Samsung', avatar: '', points: 900, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Amazon', avatar: '', points: 883, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Lenovo', avatar: '', points: 700, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Huawei', avatar: '', points: 699, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Microsoft', avatar: '', points: 632, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Asus', avatar: '', points: 601, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Google', avatar: '', points: 450, correctAnswers: 4, totalQuestions: 5 }
            ],
            'gaming-laptops': [
                { id: uuid(), name: 'Asus', avatar: '', points: 995, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Razer', avatar: '', points: 900, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Legion', avatar: '', points: 883, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Alienware', avatar: '', points: 700, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Acer', avatar: '', points: 699, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'HP', avatar: '', points: 632, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'MSI', avatar: '', points: 601, correctAnswers: 4, totalQuestions: 5 }
            ],
            'traditional-laptops': [
                {
                    id: uuid(),
                    name: 'Apple',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/apple.jpg`,
                    points: 995,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'HP',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/hp.jpg`,
                    points: 900,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Lenovo',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/lenovo.jpg`,
                    points: 883,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Dell',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/dell.jpg`,
                    points: 700,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Acer',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/acer.jpg`,
                    points: 699,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Asus',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/asus.jpg`,
                    points: 632,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'MSI',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/msi.jpg`,
                    points: 601,
                    correctAnswers: 4,
                    totalQuestions: 5
                },
                {
                    id: uuid(),
                    name: 'Microsoft Surface',
                    avatar: `${window.location.origin}/images/categories/ecommerce/traditional-laptops/microsoft-surface.jpg`,
                    points: 450,
                    correctAnswers: 4,
                    totalQuestions: 5
                }
            ]
        },
        'telecom-network': {
            call: [
                { id: uuid(), name: 'Ufone', avatar: '', points: 995, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Jazz', avatar: '', points: 900, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Zong', avatar: '', points: 883, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Telenor', avatar: '', points: 700, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Warid', avatar: '', points: 699, correctAnswers: 4, totalQuestions: 5 }
            ],
            sms: [
                { id: uuid(), name: 'Ufone', avatar: '', points: 995, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Jazz', avatar: '', points: 900, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Zong', avatar: '', points: 883, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Telenor', avatar: '', points: 700, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Warid', avatar: '', points: 699, correctAnswers: 4, totalQuestions: 5 }
            ],
            internet: [
                { id: uuid(), name: 'Jazz', avatar: '', points: 995, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Zong', avatar: '', points: 900, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Telenor', avatar: '', points: 883, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Ufone', avatar: '', points: 700, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Warid', avatar: '', points: 699, correctAnswers: 4, totalQuestions: 5 }
            ],
            hybrid: [
                { id: uuid(), name: 'Ufone', avatar: '', points: 995, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Jazz', avatar: '', points: 900, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Zong', avatar: '', points: 883, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Telenor', avatar: '', points: 700, correctAnswers: 4, totalQuestions: 5 },
                { id: uuid(), name: 'Warid', avatar: '', points: 699, correctAnswers: 4, totalQuestions: 5 }
            ]
        }
    }
}
