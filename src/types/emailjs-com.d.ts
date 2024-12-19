declare module 'emailjs-com' {
    export function send(serviceId: string, templateId: string, templateParams: object, userId: string): Promise<any>;
  }
  