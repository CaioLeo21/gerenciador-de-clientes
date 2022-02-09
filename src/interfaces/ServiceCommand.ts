export interface ServiceCommand {
    execute(...data: any[]): Promise<any>;
}