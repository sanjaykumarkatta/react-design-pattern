import { ReactNode } from 'react';

export interface userList {
    oid: number;
    firstName: string;
    lastName: string;
    email: string;
    lastLogon: string;
    enabled: boolean | string;
}

export interface userDetails {
    oid: number;
    firstName: string;
    lastName: string;
    email: string;
    lastLogon: string;
    enabled: boolean;
    addresses: Addresses;
    phoneNumbers: PhoneNumbers;
    favorites: Favorites;
    magazineSubscriptions?: (MagazineOrChannel)[] | null;
    channelSubscriptions?: (MagazineOrChannel)[] | null;
}

export interface Addresses {
    home: HomeOrWork;
    work: HomeOrWork;
}

export interface HomeOrWork {
    street1: string;
    street2: string;
    city: string;
    province: string;
    postalCode: string;
}

export interface PhoneNumbers {
    work: string;
    home: string;
    mobile: string;
}

export interface Favorites {
    colors?: (string)[] | null;
    food?: (string)[] | null;
}

export interface MagazineOrChannel {
    title: string;
    start: string;
    end: string;
}

export interface userDetailsinfo {
    user: userDetails;
}

export interface personalInformation {
    address: Addresses;
    phoneNumbers: PhoneNumbers;
}

export interface phoneNumbers {
    phoneNumbers: PhoneNumbers
}

export interface addressType {
    name: string;
    addressDetails: HomeOrWork;
}

export interface ContainerLayoutProps {
    children: [ReactNode, ReactNode];
};