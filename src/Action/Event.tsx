import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BotGetter, BotPresenceGetter, BotServerGetter } from "./Bot";
import { getStatus, getVoice } from "./Voice";

export enum BoardEvent {
  BoardUpdate = "BoardUpdate",
  BoardCreate = "BoardCreate",
  BoardDelete = "BoardDelete",
}

export enum VoiceEvent {
  VoiceJoin = "VoiceJoin",
  VoiceChange = "VoiceChanChange",
  VoiceLeave = "VoiceLeave",
  VoiceUpdate = "VoiceUpdate",
  VoiceError = "VoiceError",
  VoiceVolume = "VoiceVolume",
}

export enum BotEvent {
  BotReady = "BotReady",
  BotDisconnect = "BotDisconnect",
  BotUpdate = "BotUpdate",
  GuildUpdate = "guildUpdate",
}

export enum TokenEvent {
  TokenCreate = "TokenCreate",
  TokenDelete = "TokenDelete",
  TokenUpdate = "TokenUpdate",
}

export enum AppEvent {
  ServeurStart = "AppStart",
  ServeurStop = "AppStop",
  ConfUpdate = "ConfigUpdate",
  ClientRestart = "ClientRestart",
}

interface Event {
  Ready: boolean;
  Pending: boolean;
}
const initialState = {
  Ready: false,
  Pending: false,
} as Event;

export const EventInit = createAsyncThunk(
  "Event/init",
  async ({ socket }: any, { dispatch }) => {
    socket.on(BotEvent.BotUpdate, () => {
      dispatch(BotGetter({ force: true }));
      dispatch(BotServerGetter());
      dispatch(BotPresenceGetter())
    });
    socket.on(VoiceEvent.VoiceUpdate, () => {
      dispatch(getVoice());
    });
    socket.on(VoiceEvent.VoiceJoin, () => {
      dispatch(getStatus());
    });
  },
  {
    condition: (force: boolean | void, { getState }): boolean => {
      var test = getState();
      if ((test as any).Event.Ready) return false;
      return true;
    },
  }
);

const EventSlicer = createSlice({
  name: "Event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(EventInit.pending, (state) => {
        state.Pending = true;
      })
      .addCase(EventInit.rejected, (state) => {
        state.Pending = false;
      })
      .addCase(EventInit.fulfilled, (state) => {
        state.Pending = false;
        state.Ready = true;
      });
  },
});

export default EventSlicer.reducer;
