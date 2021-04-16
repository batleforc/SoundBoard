import Router from '@koa/router'
import DataBase from '../../Utils/Db';
import {Log} from '../../Utils/Log'
var sBoard = new Router();

sBoard
  .get("/", async (ctx : any, next : any) =>{
    ctx.body= await ctx.Db.GetAllTab()
    await next()
  })
  .post("/",async (ctx : any, next : any) => {
    var {label} = ctx.request.body
    if(label===undefined){
      ctx.status = 400
      ctx.body={message:"Error one argument missing"}
    }else{
      await (ctx.Db as DataBase).InsertTab(label);
      Log("Board",`[${ctx.request.ip}] ajout d'un board nommer ${label}`)
      ctx.body= await ctx.Db.GetAllTab()
    }
    await next()
  })
  .delete("/:TabId", async (ctx : any, next : any) =>{
    if(ctx.params.TabId===undefined){
      ctx.status = 400
      ctx.body={message:"Error one argument missing"}
    }else{
      await ctx.Db.DeleteTab(ctx.params.TabId)
      Log("Board",`[${ctx.request.ip}] suppression d'un board a l'id ${ctx.params.TabId}`)
      ctx.body= await ctx.Db.GetAllTab()
    }
    await next()
  })
  .put("/:TabId", async (ctx : any, next : any) => {
    var {label,content} = ctx.request.body
    var {TabId} = ctx.params
    if(TabId===undefined){
      ctx.status = 400
      ctx.body={message:"Error one argument missing"}
    }else{
      if(label!==undefined){
        await (ctx.Db as DataBase).EditTabLabel(TabId,label)
      }
      if(content!==undefined){
        await (ctx.Db as DataBase).EditTabContent(TabId,JSON.stringify(content))
      }
      Log("Board",`[${ctx.request.ip}] modification du board ${TabId} => {content:${JSON.stringify(content)},label:${label}}`)
      ctx.body= await ctx.Db.GetAllTab()
    }
    await next()
  })



export default sBoard;