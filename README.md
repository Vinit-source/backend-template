# How to Clone, Modify, and Use the Backend Template for your Project

**Full stack application demo and server side code:**  [Tutorial 1](https://drive.google.com/file/d/1CcpiVZZ1r-yPSNgZU1w19hOPRsVEDigS/view?usp=share_link)

#### [Made by Vinit Gore with Scribe](https://scribehow.com/shared/How_to_Clone_Modify_and_Use_the_Backend_Template_for_your_Project__qAsUkBIJTKOIXW7IBmhfpA)


**1. Go to `https://github.com/Vinit-source?tab=repositories` and open `backend-template` repository
Click "Code"
Copy the link to the repository.**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/97364d1b-b0d7-4e37-a6b4-f6edc9e9f0f6/stack_animation.webp)

**2. Open Visual Studio Code and open the folder where you want to clone the repo.**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/2231f525-c4c5-40b7-9a5a-3c90621a27ff/screenshot.jpeg?tl_px=403,1084&br_px=1149,1504&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=262,286)

**3. Open terminal and type "git clone"**

**4. Paste [[ctrl]] + [[v]] and then Press Enter.
The repo should be cloned into your folder.**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/9a1b9361-3bd3-4c62-b0c1-8a723c681809/stack_animation.webp)

**5. Open the `backend-template` folder in VSCode by pressing [[Ctrl + K]][[Ctrl + O]]
Click "Select Folder"**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/9e09e0ca-93b8-4b9b-b401-e2a6970789ad/stack_animation.webp)

**6. Click "BACKEND-TEMPLATE"
Click "package.json"
See the dependencies required for this project.
Type "npm install [[enter]]". This will install the dependencies in your folder. After installation, you should see the `node_modules` folder in your folder.**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/cd591a91-9ba8-44ee-be3c-8accb8d556f6/stack_animation.webp)

**7. Click "changes_to_store.md"**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/4896ce5e-88bb-4ee6-a5db-3451e2e18a6f/stack_animation.webp)

**8. Type "mysql [[enter]]"**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/982001ed-3410-49ae-96af-3d9af51b0b2b/screenshot.jpeg?tl_px=0,1084&br_px=746,1504&sharp=0.8&width=560)

**9. Click here:**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/e3d89765-8856-418d-95a7-24e91d6b22e0/screenshot.jpeg?tl_px=42,586&br_px=788,1006&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=262,139)

**10. Click "Tables" in `store` database.
Click "customers"**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/ed8a61e7-3f48-4e96-9e2b-75d043e78dd2/stack_animation.webp)

**11. - Add `password` column to `customers`. 
- Add UNIQUE to `phone` in `customers`.**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/924e909c-dbf3-4438-8459-14d996194e62/stack_animation.webp)

**12.  - Add Default `0` to `points` column in `customers`.**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/35e7b4fa-4cb8-4d54-b6cb-2cf894809d5b/stack_animation.webp)

**13. Click "Apply"**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/6d2a2c06-8774-471c-9f4c-ed8bb73cb53d/screenshot.jpeg?tl_px=1509,902&br_px=2255,1322&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=407,139)

**14. Click "customers"**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/29738c20-9d0d-412e-9ed6-d0a7806b0b1c/screenshot.jpeg?tl_px=0,274&br_px=746,694&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=198,139)

**15. Add password to the 10th customer and click on 'Apply' to save changes.**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/772fd784-f6c8-462a-9760-dc46dc574d8b/screenshot.jpeg?tl_px=1050,739&br_px=1796,1159&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=262,139)

**16. Copy line 1, 4, 5 to a new SQL script in your computer. Change the password in line 4 (at the end) to your MySQL 'root' password. 
Edit the password if required.
Run line 1. Check if the output contains 'mysql_native_password' for @@default_authentication_plugin. If not, run line 4 and 5.
Click "Code Editor"**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/368653a1-910c-429f-915f-f72e47885b5f/stack_animation.webp)

**17. Go to VSCode and open `api/utils/database.js`**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/6dd4c2af-4c0c-446b-a0a6-d71eecb79c88/screenshot.jpeg?tl_px=0,0&br_px=746,420&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=135,120)

**18. Click "utils"**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/433d40a7-5e7a-4307-a0eb-3b1451be923a/screenshot.jpeg?tl_px=0,135&br_px=746,555&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=147,139)

**19. Click "database.js"**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/a422ce8e-32db-4f54-9ffd-0a9ebc684862/screenshot.jpeg?tl_px=0,165&br_px=746,585&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=145,139)

**20. Add your password and project database name in this file.**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/b9cb16e1-990c-4cda-ab52-c9425132026f/screenshot.jpeg?tl_px=614,169&br_px=1360,589&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=262,139)

**21.  **

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/94dc1db3-1300-485d-a588-8692751a0c78/screenshot.jpeg?tl_px=322,204&br_px=1068,624&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=262,139)

**22. Select terminal:
Type "node ./api/index.js [[enter]]"**

**23. Click " Go Live"**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/dccfb6df-925f-4223-9ece-c4f243824146/screenshot.jpeg?tl_px=1509,1084&br_px=2255,1504&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=384,231)

**24. Click "Backend Template"**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/83289013-d6cd-4811-be31-c237191fb967/screenshot.jpeg?tl_px=511,332&br_px=1257,752&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=262,139)

**25. Press [[ctrl]] + [[shift]] + [[I]]**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/fbd77007-9a6c-491f-a985-1ba35a38202d/screenshot.jpeg?tl_px=582,223&br_px=1328,643&sharp=0.8&width=560)

**26. Click "Network"**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/44331f97-a15c-47eb-bd3e-e89c0d14fd02/screenshot.jpeg?tl_px=113,816&br_px=859,1236&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=262,139)

**27. Click "404-246-3370"
Press [[ctrl]] + [[c]]
Click "Phone:"
Press [[ctrl]] + [[v]]
Click "Abcdefgh@123"
Press [[ctrl]] + [[c]]
Click "Password"
Press [[ctrl]] + [[v]]
Click "Login"
Go to DevTools, open login 200 request in "Network" tab and open Payload tab
Notice the request body (payload) "{phone: "404-246-3370", password: "Abcdefgh@123"}"**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/b594b164-5b0b-4f74-8989-d53fa15e4667/stack_animation.webp)

**28. Click "Check localStorage. You should be able to see the userId: 10 data in it. Open MySQL Workbench and run "**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/1a289893-2265-4e61-a4b2-5711dafaa094/screenshot.jpeg?tl_px=1015,41&br_px=1761,461&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=262,139)

**29. Click "Check localStorage. You should be able to see the userId: 10 data in it. Open MySQL Workbench and run "**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/f0f18a02-ebc7-4be0-b9d2-bdb485fb06e1/stack_animation.webp)

**30. Click "database.js - backend-template - Visual Studio Code"**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/f821b30f-64ea-43bb-90a1-c58befe88d2a/screenshot.jpeg?tl_px=417,1084&br_px=1163,1504&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=262,180)

**31. Code that makes request from Frontend:**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/9559e363-ca95-4b69-b7e9-02f65f0c1c4d/stack_animation.webp)

**32. Example register.js page. **

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/7ed88d89-b711-4d36-9148-572add6ece83/stack_animation.webp)

**33. Template Controller method that you can customise directly for your project.**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/20c8f35f-9c03-43f5-81d6-8d54b32c6d92/stack_animation.webp)

**34. You can read through comments to understand every line.**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/da546bd1-edca-4c73-88bb-859ade4c9ac6/stack_animation.webp)

**35. Click "routes"
Click "userRoutes.js"**

![](https://colony-recorder.s3.amazonaws.com/files/2023-04-07/e917375a-22ea-4ac1-a5dc-45c1b1fe844f/stack_animation.webp)

**36. Click `userModel.js`. Notice the template yourMethod. You can use this method as a base template for your model methods. Add your SQL query in the <YOUR-SQL-QUERY> and related params in the `params_used_in_query`. Refer `store_full_stack` for more details.**

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2023-04-07/26dae75f-b1ce-485d-a178-93a9a4ee6ee6/File.jpeg?tl_px=0,117&br_px=746,537&sharp=0.8&width=560&wat_scale=50&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-labs-public.s3.us-east-2.amazonaws.com/images/watermarks/watermark_default.png&wat_pad=174,139)
#### [Made with Scribe](https://scribehow.com/shared/How_to_Clone_Modify_and_Use_the_Backend_Template_for_your_Project__qAsUkBIJTKOIXW7IBmhfpA)


