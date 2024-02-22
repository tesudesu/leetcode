# https://leetcode.com/problems/find-users-with-valid-e-mails/

import pandas as pd

def valid_emails(users: pd.DataFrame) -> pd.DataFrame:
    regex = "^[A-Za-z][A-Za-z0-9_.-]*\@leetcode\.com$"
    return users[users["mail"].str.match(regex)]