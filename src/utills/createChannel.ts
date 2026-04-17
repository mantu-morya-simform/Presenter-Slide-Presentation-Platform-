import { broadcastChannelName } from '../constants/constantsType';

export function createChannel(): BroadcastChannel {
  return new BroadcastChannel(broadcastChannelName);
}
