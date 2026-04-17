import { startPresentationButtonElement,endPresentationButtonElement } from './slide-ui';

let viewerTabReference:Window|null;

export function startPresentation(){
    endPresentationButtonElement?.classList.remove('d-none');
    startPresentationButtonElement?.classList.add('d-none');
    viewerTabReference=window.open('/viewer.html', '_blank');
}

export function endPresentation(){
  endPresentationButtonElement?.classList.add('d-none');
  startPresentationButtonElement?.classList.remove('d-none');
  if(viewerTabReference){
    viewerTabReference.close();
  };
}