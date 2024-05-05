import { ref } from 'vue'

import image1 from '@/assets/test.jpeg'

const getPortfolioItems = () => {
  const portfolioItems = ref([
    {
      id: 1,
      title: 'Portfolio Item 1',
      description: 'This is the first portfolio item',
      image: image1,
      category: 'web'
  
    },
    {
      id: 2,
      title: 'Portfolio Item 2',
      description: 'This is the second portfolio item',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.google.com',
      category: 'video'
    },
    {
      id: 3,
      title: 'Portfolio Item 3',
      description: 'This is the third portfolio item',
      category: 'photo'
    },
    {
      id: 2,
      title: 'Portfolio Item 2',
      description: 'This is the second portfolio item',
      category: 'photo'
    }  
  ])

  return { portfolioItems }
}

export default getPortfolioItems