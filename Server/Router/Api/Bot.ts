import Router from "@koa/router";
import DataBase from "../../Utils/Db";
import Discord from "../../Utils/Discord";
import Store from "../../Actions/index";
import {
  BotDisconnect,
  BotGetAllChan,
  BotGetAllParsedServeur,
  BotLogin,
  BotSetActivity,
} from "../../Actions/Bot";
import store from "../../Actions/index";
import { Token } from "../../Actions/Token";
var Bot = new Router();

Bot.get("/serveur", async (ctx: any, next: any) => {
  if (ctx.discord.Ready)
    ctx.body = (await Store.dispatch(BotGetAllParsedServeur())).payload;
  else
    ctx.body = {
      message: "Bot not started yet or not ready",
    };
  await next();
})
  .get("/chan/:id", async (ctx: any, next: any) => {
    var params = ctx.params.id;
    if (ctx.discord.Ready) {
      ctx.body = await (await (Store.dispatch(BotGetAllChan({ params: params })))).payload;
    } else ctx.body = [];
    await next();
  })
  .post("/start", async (ctx: any, next: any) => {
    var { id } = ctx.request.body;
    if (id === undefined) {
      ctx.body = { message: "id manquant" };
      await next();
    } else {
      if (ctx.discord.Ready) await Store.dispatch(BotDisconnect());
      await Store.dispatch(
        BotLogin({
          id: id,
        })
      );
      ctx.body = { message: "all Is Green" };
    }
    await next();
  })
  .post("/stop", async (ctx: any, next: any) => {
    Store.dispatch(BotDisconnect())
    ctx.body = { message: "all Is Green" };
    await next();
  })
  .get("/presence", async (ctx: any, next: any) => {
    ctx.body = Store.getState().Bot.Presence
    await next();
  })
  .post("/presence", async (ctx: any, next: any) => {
    var { online, name, type } = ctx.request.body;
    await Store.dispatch(BotSetActivity({ online: online, name: name, type: type }))
    ctx.body = Store.getState().Bot.Presence
    await next();
  });

export default Bot;
