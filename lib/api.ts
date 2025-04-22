// API response interfaces
export interface UserProfileResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export type ServiceCode =
  | 'filters'
  | 'pest_control'
  | 'id'
  | 'move'
  | 'credit'
  | 'rewards'
  | 'insurance'
  | 'internet'
  | 'owner_paid_pest';

export interface Service {
  id: string;
  name: string;
  code: ServiceCode;
}

export interface UserServicesResponse {
  services: Service[];
}

export interface Branding {
  primaryBrandingColor: string;
  secondaryBrandingColor: string;
}

// Mock user data types
interface MockUser {
  profile: {
    firstName: string;
    lastName: string;
    email: string;
  };
  services: Service[];
  branding: Branding;
}

type MockUsers = {
  [key: string]: MockUser;
};

// Mock user data
const mockUsers: MockUsers = {
  // Christopher - Long-term resident with all services
  '123e4567-e89b-42d3-a456-556642440000': {
    profile: {
      firstName: 'Christopher',
      lastName: 'Johnson',
      email: 'christopher.johnson@example.com',
    },
    services: [
      {
        id: 'service-1',
        name: 'Air filter',
        code: 'filters',
      },
      {
        id: 'service-2',
        name: 'Credit building',
        code: 'credit',
      },
      {
        id: 'service-3',
        name: 'Identity protection',
        code: 'id',
      },
      {
        id: 'service-4',
        name: 'Pest control',
        code: 'pest_control',
      },
      {
        id: 'service-5',
        name: "Renter's insurance program",
        code: 'insurance',
      },
      {
        id: 'service-6',
        name: 'Resident rewards',
        code: 'rewards',
      },
      {
        id: 'service-7',
        name: 'Lawn care',
        code: 'owner_paid_pest',
      },
    ],
    branding: {
      primaryBrandingColor: '#16A34A',
      secondaryBrandingColor: '#0F172A',
    },
  },
  // Sarah - New resident with basic services
  '987fcdeb-51a2-43c1-a140-556642440001': {
    profile: {
      firstName: 'Sarah',
      lastName: 'Martinez',
      email: 'sarah.martinez@example.com',
    },
    services: [
      {
        id: 'service-1',
        name: 'Air filter',
        code: 'filters',
      },
      {
        id: 'service-5',
        name: "Renter's insurance program",
        code: 'insurance',
      },
      {
        id: 'service-8',
        name: 'Internet',
        code: 'internet',
      },
    ],
    branding: {
      primaryBrandingColor: '#A00F8B',
      secondaryBrandingColor: '#FBD46D',
    },
  },
  // Michael - Mid-term resident with selected services
  '456bcdef-02a9-4b1f-9c3d-556642440002': {
    profile: {
      firstName: 'Michael',
      lastName: 'Thompson',
      email: 'michael.thompson@example.com',
    },
    services: [
      {
        id: 'service-1',
        name: 'Air filter',
        code: 'filters',
      },
      {
        id: 'service-2',
        name: 'Credit building',
        code: 'credit',
      },
      {
        id: 'service-4',
        name: 'Pest control',
        code: 'pest_control',
      },
      {
        id: 'service-5',
        name: "Renter's insurance program",
        code: 'insurance',
      },
    ],
    branding: {
      primaryBrandingColor: '#FF6F61',
      secondaryBrandingColor: '#254441',
    },
  },
};

// Mock API calls for user data
export async function fetchUserProfile(
  userId: string
): Promise<UserProfileResponse> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Validate UUID format
  if (
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      userId
    )
  ) {
    throw new Error('Invalid UUID format');
  }

  const user = mockUsers[userId];
  if (!user) {
    throw new Error('User not found');
  }

  return {
    id: userId,
    ...user.profile,
  };
}

export async function fetchUserServices(
  userId: string
): Promise<UserServicesResponse> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Validate UUID format
  if (
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      userId
    )
  ) {
    throw new Error('Invalid UUID format');
  }

  const user = mockUsers[userId];
  if (!user) {
    throw new Error('User not found');
  }

  return {
    services: user.services,
  };
}

export async function fetchBranding(userId: string): Promise<Branding> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Validate UUID format
  if (
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      userId
    )
  ) {
    throw new Error('Invalid UUID format');
  }

  const user = mockUsers[userId];
  if (!user) {
    throw new Error('User not found');
  }

  return user.branding;
}
