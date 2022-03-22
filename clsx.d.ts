export type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;

export interface ClassDictionary {
	[id: string]: any;
}

export interface ClassArray extends Array<ClassValue> { }

export const clsx: (...classes: ClassValue[]) => string;

export default clsx;
