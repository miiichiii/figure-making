/**
 * capture_assets.js
 * Puppeteer script to generate screenshots for help.html
 * Run: node capture_assets.js
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const ASSETS_DIR = path.join(__dirname, 'assets');
const INDEX_PATH = path.join(__dirname, 'index.html');
const FILE_URL = `file://${INDEX_PATH}`;

// Ensure assets directory exists
if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForGraphRender(page, timeout = 3000) {
    // Wait for SVG to appear and have content
    await page.waitForSelector('#svg-wrapper svg', { timeout });
    await wait(800); // Additional wait for animations/calculations
}

async function capture() {
    console.log('Starting screenshot capture...');
    console.log(`Opening: ${FILE_URL}`);

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport with high DPI
    await page.setViewport({
        width: 1400,
        height: 900,
        deviceScaleFactor: 2
    });

    try {
        // Navigate to local file
        await page.goto(FILE_URL, { waitUntil: 'networkidle0', timeout: 30000 });
        await wait(1000);

        // ============================================
        // (1) hero_shot.png - Time Series Sample (Light Mode)
        // ============================================
        console.log('Capturing hero_shot.png (Time Series, Light Mode)...');

        // Explicitly set Light theme
        await page.select('#themeSelect', 'light');
        await wait(500);

        // Click Time Series Sample button
        await page.evaluate(() => {
            const buttons = document.querySelectorAll('button');
            for (const btn of buttons) {
                if (btn.textContent.includes('Time Series Sample')) {
                    btn.click();
                    break;
                }
            }
        });
        await wait(1500);
        await waitForGraphRender(page);

        // Scroll to show the graph nicely
        await page.evaluate(() => {
            const mainContent = document.querySelector('.main-content');
            if (mainContent) mainContent.scrollTop = 0;
        });
        await wait(500);

        await page.screenshot({
            path: path.join(ASSETS_DIR, 'hero_shot.png'),
            fullPage: false
        });
        console.log('  -> hero_shot.png saved');

        // ============================================
        // (2) comparison_shot.png - Comparison Mode with Stats
        // ============================================
        console.log('Capturing comparison_shot.png (Comparison + Stats)...');

        // Switch to Comparison mode
        await page.select('#plotMode', 'comparison');
        await wait(500);

        // Click Two-Group Sample button
        await page.evaluate(() => {
            const buttons = document.querySelectorAll('button');
            for (const btn of buttons) {
                if (btn.textContent.includes('Two-Group Sample')) {
                    btn.click();
                    break;
                }
            }
        });
        await wait(2000);
        await waitForGraphRender(page);

        // Wait for stats to calculate
        await page.waitForFunction(() => {
            const statsContainer = document.getElementById('statsTableContainer');
            return statsContainer && statsContainer.innerHTML.includes('table');
        }, { timeout: 10000 }).catch(() => {
            console.log('  (Stats table might not have loaded fully)');
        });
        await wait(1000);

        // Scroll to show both graph and stats panel
        await page.evaluate(() => {
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                // Scroll down a bit to show stats panel
                mainContent.scrollTop = 200;
            }
        });
        await wait(500);

        await page.screenshot({
            path: path.join(ASSETS_DIR, 'comparison_shot.png'),
            fullPage: false
        });
        console.log('  -> comparison_shot.png saved');

        // ============================================
        // (3) survival_shot.png - Survival Mode (Kaplan-Meier)
        // ============================================
        console.log('Capturing survival_shot.png (Survival/KM)...');

        // Switch to Survival mode
        await page.select('#plotMode', 'survival');
        await wait(500);

        // Click Survival Sample button
        await page.evaluate(() => {
            const buttons = document.querySelectorAll('button');
            for (const btn of buttons) {
                if (btn.textContent.includes('Survival Sample')) {
                    btn.click();
                    break;
                }
            }
        });
        await wait(2000);
        await waitForGraphRender(page);

        // Scroll to show the survival curve nicely
        await page.evaluate(() => {
            const mainContent = document.querySelector('.main-content');
            if (mainContent) mainContent.scrollTop = 0;
        });
        await wait(500);

        await page.screenshot({
            path: path.join(ASSETS_DIR, 'survival_shot.png'),
            fullPage: false
        });
        console.log('  -> survival_shot.png saved');

        // ============================================
        // (4) dark_mode.png - Dark Theme
        // ============================================
        console.log('Capturing dark_mode.png (Dark Theme)...');

        // Switch to Comparison mode first (looks better in dark)
        await page.select('#plotMode', 'comparison');
        await wait(500);

        // Click Two-Group Sample button
        await page.evaluate(() => {
            const buttons = document.querySelectorAll('button');
            for (const btn of buttons) {
                if (btn.textContent.includes('Two-Group Sample')) {
                    btn.click();
                    break;
                }
            }
        });
        await wait(1500);

        // Switch to Dark theme
        await page.select('#themeSelect', 'dark');
        await wait(1000);
        await waitForGraphRender(page);

        // Scroll to focus on the graph
        await page.evaluate(() => {
            const mainContent = document.querySelector('.main-content');
            if (mainContent) mainContent.scrollTop = 0;
        });
        await wait(500);

        await page.screenshot({
            path: path.join(ASSETS_DIR, 'dark_mode.png'),
            fullPage: false
        });
        console.log('  -> dark_mode.png saved');

        // ============================================
        // (5) controls_shot.png - Visual Controls
        // ============================================
        console.log('Capturing controls_shot.png (Visual Controls)...');

        // Make sure we're in light mode with comparison data
        await page.select('#themeSelect', 'light');
        await page.select('#plotMode', 'comparison');
        await wait(500);

        await page.evaluate(() => {
            const buttons = document.querySelectorAll('button');
            for (const btn of buttons) {
                if (btn.textContent.includes('Two-Group Sample')) {
                    btn.click();
                    break;
                }
            }
        });
        await wait(1500);
        await waitForGraphRender(page);

        // Scroll to show the visual controls area (below the graph)
        await page.evaluate(() => {
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.scrollTop = 450;
            }
        });
        await wait(500);

        await page.screenshot({
            path: path.join(ASSETS_DIR, 'controls_shot.png'),
            fullPage: false
        });
        console.log('  -> controls_shot.png saved');

        // ============================================
        // (6) explorer_shot.png - Explorer Mode
        // ============================================
        console.log('Capturing explorer_shot.png (Explorer Panel)...');

        // Switch back to Light theme
        await page.select('#themeSelect', 'light');
        await wait(500);

        // Open Explorer panel by clicking the handle
        await page.evaluate(() => {
            const explorerPanel = document.getElementById('explorer-panel');
            if (explorerPanel) {
                explorerPanel.classList.add('pinned');
            }
        });
        await wait(800);

        await page.screenshot({
            path: path.join(ASSETS_DIR, 'explorer_shot.png'),
            fullPage: false
        });
        console.log('  -> explorer_shot.png saved');

        console.log('\n=== All screenshots captured successfully! ===');

        // Verify all files exist
        const files = ['hero_shot.png', 'comparison_shot.png', 'survival_shot.png', 'dark_mode.png', 'controls_shot.png', 'explorer_shot.png'];
        let allExist = true;
        for (const file of files) {
            const filePath = path.join(ASSETS_DIR, file);
            if (fs.existsSync(filePath)) {
                const stats = fs.statSync(filePath);
                console.log(`  ${file}: ${(stats.size / 1024).toFixed(1)} KB`);
            } else {
                console.error(`  ERROR: ${file} was not created!`);
                allExist = false;
            }
        }

        if (!allExist) {
            process.exit(1);
        }

    } catch (error) {
        console.error('Error during capture:', error);
        process.exit(1);
    } finally {
        await browser.close();
    }
}

capture();
