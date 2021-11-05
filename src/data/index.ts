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
            data: []
        },
        {
            id: uuid(),
            name: 'Resturant',
            slug: 'resturant',
            image: `${window.location.origin}/images/categories/resturants.jpg`,
            data: []
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
            data: []
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
                }
            ]
        },
        {
            id: uuid(),
            name: 'Telecom Network',
            slug: 'telecom-network',
            image: `${window.location.origin}/images/categories/telecom-network.jpg`,
            data: []
        },
        {
            id: uuid(),
            name: 'Transport',
            slug: 'transport',
            image: `${window.location.origin}/images/categories/transport.jpg`,
            data: []
        },
        {
            id: uuid(),
            name: 'Companies',
            slug: 'companies',
            image: `${window.location.origin}/images/categories/companies.jpg`,
            data: []
        }
    ]
}
