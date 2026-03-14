from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from model import calculate_impact



app = FastAPI()

# Enable CORS so frontend (React) can call API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ImpactRequest(BaseModel):
    resource_type: str
    quantity: float
    distance_km: float


@app.get("/")
def home():
    return {"message": "Environmental Impact Service Running"}


@app.post("/impact-analysis")
def impact_analysis(request: ImpactRequest):
    result = calculate_impact(
        request.resource_type,
        request.quantity,
        request.distance_km
    )
    return result


@app.get("/health")
def health_check():
    return {"status": "AI service running"}

