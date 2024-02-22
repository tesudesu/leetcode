# https://leetcode.com/problems/calculate-special-bonus/

import pandas as pd

def calculate_special_bonus(employees: pd.DataFrame) -> pd.DataFrame:
    employees["bonus"] = employees["salary"]
    employees.loc[(employees["name"].str[0] == "M") | (employees["employee_id"] % 2 == 0), "bonus"] = 0
    return employees[["employee_id", "bonus"]].sort_values("employee_id")

# def calculate_special_bonus(employees: pd.DataFrame) -> pd.DataFrame:
#     employees["bonus"] = employees.apply(lambda x: x["salary"] if not x["name"].startswith("M") and x["employee_id"] % 2 != 0 else 0, axis=1)
#     return employees[["employee_id", "bonus"]].sort_values("employee_id")