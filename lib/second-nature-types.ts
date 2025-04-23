export interface Resident {
	externalReference: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	type: string;
	id: string;
	companyId: string;
}

export interface Branding {
	id: string;
	name: string;
	email: string | null;
	erpUrl: string | null;
	phoneNumber: string | null;
	rbpFee: number | null;
	parentId: string | null;
	fontBrandColor: string;
	logoSrc: string;
	primaryBrandColor: string;
	secondaryBrandColor: string;
	subdomain: string | null;
	insuranceCoverage: string | null;
	leaseViolationFee: number | null;
	externalId: string | null;
	status: string;
	pmcWebsiteUrl: string | null;
	stripeCustomerAccountLink: string | null;
	favicon: string | null;
	pmcLegalName: string | null;
	streetAddress1: string | null;
	streetAddress2: string | null;
	city: string | null;
	state: string | null;
	zipCode: string | null;
	country: string | null;
	verifiedAddressId: string | null;
}
