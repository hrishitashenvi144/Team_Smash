import pandas as pd
import numpy as np

# Load emission factor dataset
data = pd.read_csv("emission_factors.csv")


def generate_summary(resource_type, co2_saved, landfill_diverted):
    """
    Generates a human-readable summary of environmental impact
    """
    return (
        f"Reusing {resource_type} prevents approximately "
        f"{round(co2_saved,2)} kg of CO2 emissions and diverts "
        f"{round(landfill_diverted,2)} kg of waste from landfill."
    )


def calculate_impact(resource_type, quantity, distance_km):
    """
    Calculates environmental impact metrics
    """

    row = data[data["resource_type"] == resource_type]

    if row.empty:
        return {
            "error": f"Resource type '{resource_type}' not found in dataset"
        }

    emission_factor = float(row["emission_factor"].values[0])
    landfill_factor = float(row["landfill_factor"].values[0])
    economic_value_per_unit = float(row["economic_value_per_unit"].values[0])

    # Basic impact calculations
    co2_saved = quantity * emission_factor
    landfill_diverted = quantity * landfill_factor
    economic_value = quantity * economic_value_per_unit

    # Optional extra metric for stronger demo
    energy_saved = quantity * 0.5

    summary = generate_summary(resource_type, co2_saved, landfill_diverted)

    result = {
        "resource_type": resource_type,
        "quantity_processed": quantity,
        "distance_km": distance_km,
        "impact_metrics": {
            "co2_saved_kg": round(co2_saved, 2),
            "landfill_diverted_kg": round(landfill_diverted, 2),
            "economic_value_usd": round(economic_value, 2),
            "energy_saved_kwh": round(energy_saved, 2)
        },
        "impact_summary": summary
    }

    return result