#-*- coding : utf-8-*-
# coding:utf-8

import uvicorn
from fastapi import File
from fastapi import FastAPI
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware

import xls2json
 
 
app = FastAPI()
origins = [
        "http://121.37.234.56:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
@app.get("/")
async def root():
    return {"message": "Hello World"}

 
@app.post("/convert/")
async def post_file(file: bytes= File()):

    with open('./RecipeFile/.tmp.xls','wb') as f:
        f.write(file)
        f.close()
    
    X2J = xls2json.Xls2Json()
    X2J.set_file(xls_file=file, json_file='./RecipeFile/.tmp.json')
    X2J.convert()

    return FileResponse('.tmp.json', filename='Recipe.json')
    # return JSONResponse({"message": "File uploaded successfully!"})




if __name__ == "__main__":
    uvicorn.run('server:app', host='0.0.0.0', port=3001, reload=True)
    # uvicorn.run('server:app',  port=3001, reload=True)
