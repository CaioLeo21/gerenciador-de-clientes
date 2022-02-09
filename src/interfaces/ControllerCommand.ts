export interface ControllerCommand {
    handle(...payload: any[]): Promise<any>;
}