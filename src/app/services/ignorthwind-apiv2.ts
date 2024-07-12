import { CustomerDto } from '../models/IGNorthwindAPIv2/customer-dto';
import { OrderDto } from '../models/IGNorthwindAPIv2/order-dto';
import { ProductDto } from '../models/IGNorthwindAPIv2/product-dto';
import { OrderDetailDto } from '../models/IGNorthwindAPIv2/order-detail-dto';
import { EmployeeDto } from '../models/IGNorthwindAPIv2/employee-dto';
import { FetchApi } from './fetch-api';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

export async function getCustomerDtoList(): Promise<CustomerDto[]> {
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	return await FetchApi.fetchApiResponse<CustomerDto[]>(`${API_ENDPOINT}/Customers`, [], 'GET', undefined, headers);
}

export async function getCustomerDto(id: string = 'BLONP'): Promise<CustomerDto | undefined> {
	if (!id) {
		return Promise.resolve(undefined);
	}
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	return await FetchApi.fetchApiResponse<CustomerDto | undefined>(`${API_ENDPOINT}/Customers/${id}`, undefined, 'GET', undefined, headers);
}

export async function getOrderDtoList(id: string = 'BLONP'): Promise<OrderDto[]> {
	if (!id) {
		return Promise.resolve([]);
	}
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	return await FetchApi.fetchApiResponse<OrderDto[]>(`${API_ENDPOINT}/Customers/${id}/Orders`, [], 'GET', undefined, headers);
}

export async function getProductDtoList(id: number): Promise<ProductDto[]> {
	if (!id) {
		return Promise.resolve([]);
	}
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	return await FetchApi.fetchApiResponse<ProductDto[]>(`${API_ENDPOINT}/Orders/${id}/Products`, [], 'GET', undefined, headers);
}

export async function getOrderDetailDtoList(id: number): Promise<OrderDetailDto[]> {
	if (!id) {
		return Promise.resolve([]);
	}
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	return await FetchApi.fetchApiResponse<OrderDetailDto[]>(`${API_ENDPOINT}/Orders/${id}/Details`, [], 'GET', undefined, headers);
}

export async function getEmployeeDtoList(): Promise<EmployeeDto[]> {
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	return await FetchApi.fetchApiResponse<EmployeeDto[]>(`${API_ENDPOINT}/Employees`, [], 'GET', undefined, headers);
}

export async function postCustomerDto(data: any): Promise<CustomerDto | undefined> {
	if (!data) {
		return Promise.resolve(undefined);
	}
	const body = JSON.stringify(data);
	const headers = {
		Authorization: 'Bearer <auth_value>',
		'Content-Type': 'application/json; charset=utf-8'
	};
	return await FetchApi.fetchApiResponse<CustomerDto | undefined>(`${API_ENDPOINT}/Customers`, undefined, 'POST', body, headers);
}

export async function deleteCustomerDto(id: string): Promise<CustomerDto | undefined> {
	if (!id) {
		return Promise.resolve(undefined);
	}
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	return await FetchApi.fetchApiResponse<CustomerDto | undefined>(`${API_ENDPOINT}/Customers/${id}`, undefined, 'DELETE', undefined, headers);
}

export async function putCustomerDto(data: any): Promise<CustomerDto | undefined> {
	if (!data) {
		return Promise.resolve(undefined);
	}
	const body = JSON.stringify(data);
	const headers = {
		Authorization: 'Bearer <auth_value>',
		'Content-Type': 'application/json; charset=utf-8'
	};
	return await FetchApi.fetchApiResponse<CustomerDto | undefined>(`${API_ENDPOINT}/Customers`, undefined, 'PUT', body, headers);
}

export async function putEmployeeDto(data: any): Promise<EmployeeDto | undefined> {
	if (!data) {
		return Promise.resolve(undefined);
	}
	const body = JSON.stringify(data);
	const headers = {
		Authorization: 'Bearer <auth_value>',
		'Content-Type': 'application/json; charset=utf-8'
	};
	return await FetchApi.fetchApiResponse<EmployeeDto | undefined>(`${API_ENDPOINT}/Employees`, undefined, 'PUT', body, headers);
}
