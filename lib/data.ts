// Mock data service - would be replaced with actual API calls in production

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

export async function getUserData(): Promise<UserData> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  // Mock user data
  return {
    id: "user-123",
    firstName: "Christopher",
    lastName: "Johnson",
    email: "christopher.johnson@example.com",
    availableServices: [
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
        name: "Insurance",
        link: "/services/insurance",
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
    ],
  }
}
