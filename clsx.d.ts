export type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;

export interface ClassDictionary {
	[id: string]: string | number | null | boolean | undefined;
}

export interface ClassArray extends Array<ClassValue> { }

declare const clsx: (...classes: ClassValue[]) => string;

export default clsx;
