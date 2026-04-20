import { startPresentationButtonElement } from './slide-ui';

let viewerTabReference:Window|null=null;
let isPresentationRunning=false;

//this function handle the presentation i.e., start and end presentation
export function handlePresentation(){
  if(!startPresentationButtonElement) return;
  if(!isPresentationRunning){
    viewerTabReference = window.open('/viewer.html', '_blank');
    startPresentationButtonElement.innerText = 'End Presentation';
    isPresentationRunning = true;
  } 
  else{
    if(viewerTabReference){
      viewerTabReference.close();
    }
    startPresentationButtonElement.innerText='Start Presentation';
    isPresentationRunning=false;
  }
}