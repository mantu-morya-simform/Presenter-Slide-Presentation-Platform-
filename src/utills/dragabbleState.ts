import { gameState} from "../models/appState";

export function isDragable(value:boolean){
    gameState.isDragAllow=value;
}