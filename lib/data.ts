// Mock data service - would be replaced with actual API calls in production

interface InfoCard {
  id: number
  title: string
  description: string
  actionText: string
  actionLink: string
  imageSrc: string
  imageAlt: string
}

// API response interfaces
interface UserProfileResponse {
  id: string
  firstName: string
  lastName: string
  email: string
}

interface UserServicesResponse {
  services: {
    id: string
    name: string
    link: string
  }[]
}

interface UserData {
  id: string
  firstName: string
  lastName: string
  email: string
  availableServices: {
    id: string
    name: string
    link: string
  }[]
}

// Mock API calls
async function fetchUserProfile(userId: string): Promise<UserProfileResponse> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  // Mock user profile data
  return {
    id: userId,
    firstName: "Christopher",
    lastName: "Johnson",
    email: "christopher.johnson@example.com"
  }
}

async function fetchUserServices(userId: string): Promise<UserServicesResponse> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  // Mock user services data
  return {
    services: [
      {
        id: "service-1",
        name: "Air filter",
        link: "/services/air-filter",
      },
      {
        id: "service-2",
        name: "Credit building",
        link: "/services/credit-building",
      },
      {
        id: "service-3",
        name: "Identity protection",
        link: "/services/identity-protection",
      },
      {
        id: "service-4",
        name: "Pest control",
        link: "/services/pest-control",
      },
      {
        id: "service-5",
        name: "Renter's insurance program",
        link: "/services/renters-insurance",
      },
      {
        id: "service-6",
        name: "Resident rewards",
        link: "/services/rewards",
      },
      {
        id: "service-7",
        name: "Lawn care",
        link: "/services/lawn-care",
      },
    ]
  }
}

export async function getUserData(userId: string): Promise<UserData> {
  // Make API calls in parallel for better performance
  const [userProfile, userServices] = await Promise.all([
    fetchUserProfile(userId),
    fetchUserServices(userId)
  ])

  // Combine the results into the UserData interface
  return {
    ...userProfile,
    availableServices: userServices.services
  }
}

export async function getInfoCards(): Promise<InfoCard[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  // Mock info cards data
  return [
    {
      id: 1,
      title: 'Feel at home from day 1',
      description: "Let's get you set up before your move-in.",
      actionText: 'Set up utilities',
      actionLink: '#',
      imageSrc: '/images/home-setup.svg',
      imageAlt: 'Home setup illustration',
    },
    {
      id: 2,
      title: 'Ready for flu season?',
      description:
        "We've got allergen-grade filters to help you get through the season.",
      actionText: 'See filters',
      actionLink: '#',
      imageSrc: '/images/flu-season.svg',
      imageAlt: 'Flu season illustration',
    },
    {
      id: 3,
      title: 'You just got credit for paying your rent on time',
      description:
        'We report on-time rent payments every 3 months to help boost your credit.',
      actionText: 'See report',
      actionLink: '#',
      imageSrc: '/images/credit-report.svg',
      imageAlt: 'Credit report illustration',
    },
  ]
}
