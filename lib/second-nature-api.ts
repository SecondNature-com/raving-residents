import axios, { AxiosInstance } from 'axios';

interface SecondNatureConfig {
	apiKey: string;
	apiSecret: string;
	baseUrl: string;
}

import type { Resident, Branding, ServiceType } from './second-nature-types';

export class SecondNatureAPI {
	private client: AxiosInstance;

	constructor(config: SecondNatureConfig) {
		this.client = axios.create({
			baseURL: config.baseUrl,
			headers: {
				'sn-api-key': config.apiKey,
				'sn-api-secret': config.apiSecret,
			},
		});
	}

	private async sendRequest(
		url: string,
		method: 'GET' | 'POST'
	): Promise<unknown> {
		try {
			const response = await this.client({
				url,
				method,
			});
			return response.data;
		} catch (error) {
			throw new Error(`Failed to fetch ${url}: ${error}`);
		}
	}

	public async fetchResident(residentId: string): Promise<Resident> {
		return this.sendRequest(
			`/tenants/${residentId}`,
			'GET'
		) as Promise<Resident>;
	}

	public async fetchBranding(companyId: string): Promise<Branding> {
		return this.sendRequest(
			`/companies/${companyId}`,
			'GET'
		) as Promise<Branding>;
	}

	public async fetchResidentServiceTypes(
		residentId: string
	): Promise<ServiceType[]> {
		return this.sendRequest(
			`/tenants/${residentId}/service-types`,
			'GET'
		) as Promise<ServiceType[]>;
	}
}
