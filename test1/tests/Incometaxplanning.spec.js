import { test, expect, selectors } from '@playwright/test';
import exp from 'constants';
import { resolve } from 'path';
import { title } from 'process';

test('#1 verify the title', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning');
    await page.waitForTimeout(5000);
    const title = await page.title();
    await page.waitForTimeout(5000);
    console.log(title);
    await expect(title).toBe('Tax Planning | 1 Finance');
})
test('#2 To check tax planning from footer', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning');
    await page.locator('//a[@class="footer_fira_18px_400_28line_A0A09B__zcNFm footer_scale_r_code__W0Nts"][9]').click();
    const Title = await page.locator("(//p[@class='hero_section_title__4F2DC'])[1]")
    await expect(Title).toHaveText('Strategic Tax Planning for Maximising Savings')

})
test('#3 To check Book and oppinement is clickable', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning');
    await page.locator("//button[@class='hero_section_btn__hjO2b']").click();
})

test('4 To verify the title name', async ({ page }) => {
    await page.pause();
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning')
    const title = await page.locator("//p[@class='what-is-tax-planning_title__JNvPN']")
    await expect(title).toHaveText('What is tax planning?');
})
test('#5 To verify the heading', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning')
    const title = await page.locator("//p[@class='help-tax-planning_title__T2uE0']")
    await expect(title).toHaveText('How can we help you with tax planning');
})
test('#6 To verify the heading of CTA', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning')
    const title = await page.locator("//p[@class='case-study_case_study_cta_title__v2kyW']")
    await expect(title).toHaveText('Reduce your tax liabilities by strategically planning your taxes.')
});
test('#7 To verify the heading name', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning')
    const title = await page.locator("//p[@class='benefits_benefit_title__DGJtH']")
    await expect(title).toHaveText('What do you get with 1 Finance?')
});
test('#8 To verify the heading title', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning')
    const title = await page.locator("//p[@class='empower_empower_title__NsFMw']")
    await expect(title).toHaveText('We empower your financial future')
})
test('#9 To verify click on home button ', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning')
    await page.waitForTimeout(5000);
    await page.locator("//a[@href='/']//*[name()='svg']").click();
    
})

test.skip('#10 Play My Video Baby ', async ({ page }) => {
    await page.pause();
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',});
    await page.goto('https://1finance.co.in/tax-planning')
    const videoBoa = 'video'
   
    await page.waitForFunction(
        selector => !!document.querySelector(selector).getAttribute("src"),
        videoBoa,
        { timeout: 9000 }
    )

    await page.click(videoBoa)

    // await page.waitForTimeout(9000)

    // const videoIsReady = await page.evaluate((videoBoa) => {
    //     const video = document.querySelector(videoBoa)
    //     if(video){
    //         return new Promise((resolve) => {
    //             if(video.readyState >= 3){
    //                 resolve(true)
    //             }else{
    //                 video.oncanplay = () => resolve(true)
    //             }
    //         })
    //     }
    //     return false
    // }, videoBoa)

    // expect(videoIsReady).toBe(true)

    // await page.click(videoBoa)

    // const isPlaying = await page.evaluate((videoBoa) => {
    //     const video = document.querySelector(videoBoa)
    //     return video && !video.paused && video.readyState > 2
    // }, videoBoa)

    // expect(isPlaying).toBe(true)
    // await page.waitForTimeout(90000)

})

test('#11 To verify name filed is clickable and accept the valid inputs ', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning')
    await page.locator("//button[@class='hero_section_btn__hjO2b']").click();
    await page.locator('//input[@class="landing-page_modal_input_name__0Nm0G"]').click();
    await page.locator("//input[@placeholder='Enter your name']").fill('AnirudhaTest');

})
test('#12 To verify name filed is clickable and accept the integer', async ({ page }) => {
    
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning')
    await page.locator("//button[@class='hero_section_btn__hjO2b']").click();
    await page.locator('//input[@class="landing-page_modal_input_name__0Nm0G"]').click();
    await page.locator('//input[@class="landing-page_modal_input_name__0Nm0G"]').fill('12345');
    const errorStateNameField = await page.locator("//div[contains(@class, 'landing-page_modal_input_error')]");

    ;  // Replace with the actual selector for the error message element
    await expect(errorStateNameField).toHaveText("Name is required");
    await page.waitForTimeout(3000);

})

test('#13 To verify name filed is clickable and accept the special charecter', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning');
    await page.locator("//button[@class='hero_section_btn__hjO2b']").click();
    await page.locator("//input[@placeholder='Enter your name']").click();
    await page.locator("//input[@placeholder='Enter your name']").fill('$');
    const errorStateNameField = await page.locator("//div[contains(@class, 'landing-page_modal_input_error')]");
    //const errorStateNameField = await page.locator() // Replace with the actual selector for the error message element
    await expect(errorStateNameField).toHaveText("Name is required");
    await page.waitForTimeout(3000);
});
test('#14 To verify name filed is clickable and accept the empty', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning');
    await page.locator("//button[@class='hero_section_btn__hjO2b']").click();
    await page.locator("//input[@placeholder='Enter your name']").click();
    await page.locator("//input[@placeholder='Enter your name']").fill(" ");
    const errorStateNameField = await page.locator("//div[contains(@class, 'landing-page_modal_input_error')]");
    //const errorStateNameField = await page.locator() // Replace with the actual selector for the error message element
    await expect(errorStateNameField).toHaveText("Name is required");
    await page.waitForTimeout(3000);
})

test('#15 To verify phone number filed is clickable and accept the Valid inputs', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning');
    await page.locator("//button[@class='hero_section_btn__hjO2b']").click();
    await page.locator("//input[@placeholder='Enter your phone number']").click();
    await page.locator("//input[@placeholder='Enter your phone number']").fill('7448143454');
    const errorStateNameField = await page.locator("//div[contains(@class,'landing-page_modal_input_error__CuyvM')][1]")
    // Replace with the actual selector for the error message element

});

test('# 16 To verify phone number filed is clickable and accept the chareters', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning');
    await page.locator("//button[@class='hero_section_btn__hjO2b']").click();
    await page.locator("(//input[@placeholder='Enter your phone number'])[1]").click();
    //await mobileNumber.click().fill('123');
    await page.locator("(//input[@placeholder='Enter your phone number'])[1]").fill('9096abc');
    const errorStateNameField = await page.locator("(//div[normalize-space()='Please enter a valid number'])[1]");
    // const errorStateNameField = await page.locator("//div[@class='landing-page_modal_input_error__CuyvM']");
    await expect(errorStateNameField).toHaveText("Please enter a valid number");
    await page.waitForTimeout(3000);
});

test('#17 To verify phone number filed is clickable and accept the special chareters', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning');
    await page.locator("//button[@class='hero_section_btn__hjO2b']").click();
    await page.locator("(//input[@placeholder='Enter your phone number'])[1]").click();
    await page.locator("(//input[@placeholder='Enter your phone number'])[1]").fill('@#abc');
    const errorStateNameField = await page.locator("//div[contains(@class,'landing-page_modal_input_error__CuyvM')][1]");
    // const errorStateNameField = await page.locator("//div[@class='landing-page_modal_input_error__CuyvM']");
    await expect(errorStateNameField).toHaveText("Please enter a valid number");
    await page.waitForTimeout(3000);
});

test('#18 To verify phone number filed is clickable and accept the empty ', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning');
    await page.locator("//button[@class='hero_section_btn__hjO2b']").click();
    await page.locator("(//input[@placeholder='Enter your phone number'])[1]").click();
    await page.locator("(//input[@placeholder='Enter your phone number'])[1]").fill("");
    await page.waitForTimeout(5000);
    const errorStateNameField = await page.locator("//div[contains(@class,'landing-page_modal_input_error__CuyvM')][1]");
    // const errorStateNameField = await page.locator("//div[@class='landing-page_modal_input_error__CuyvM']");
    await expect(errorStateNameField).toHaveText("Please enter a valid number");

})
test('#19 To verify Mobile number filed is clickable and accept the Less than 10 digits ', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning');
    await page.locator("//button[@class='hero_section_btn__hjO2b']").click();
    await page.locator("(//input[@placeholder='Enter your phone number'])[1]").click();
    await page.locator("(//input[@placeholder='Enter your phone number'])[1]").fill('123456');
    const errorStateNameField = await page.locator("//div[contains(@class,'landing-page_modal_input_error__CuyvM')][1]");
    // const errorStateNameField = await page.locator("//div[@class='landing-page_modal_input_error__CuyvM']");
    await expect(errorStateNameField).toHaveText("Please enter a valid number");

});

test('#20 To verify all valid inputs  ', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning');
    await page.locator("//button[@class='hero_section_btn__hjO2b']").click();
    await page.locator("//input[@placeholder='Enter your name']").click();
    await page.locator("//input[@placeholder='Enter your name']").fill('Anirudha')
   // await page.locator("(//input[@placeholder='Enter your phone number'])[1]").click();
    await page.locator("(//input[@placeholder='Enter your phone number'])[1]").click();
    await page.locator("(//input[@placeholder='Enter your phone number'])[1]").fill('7448143454');
    await page.locator("(//button[normalize-space()='Submit'])[1]").click();

    const errorStateNameField = await page.locator("//p[@class='landing-page_submit_title__t_hOV']");
    // const errorStateNameField = await page.locator("//div[@class='landing-page_modal_input_error__CuyvM']");
    await expect(errorStateNameField).toHaveText("Thank you!");
})

test('#21 To verify cross button  ', async ({ page }) => {
    await page.pause();
    await page.goto('https://1finance.co.in/tax-planning');
    await page.locator("//button[@class='hero_section_btn__hjO2b']").click();
    await page.locator("//div[@class='landing-page_modal_content_title_container__wteb0']//*[name()='svg']").click();
});
    
