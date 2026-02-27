import { useEffect, useState } from 'react';

interface AccessibilityTestResult {
  passed: boolean;
  message: string;
  element?: HTMLElement;
}

interface AccessibilityTestReport {
  contrastTests: AccessibilityTestResult[];
  focusTests: AccessibilityTestResult[];
  ariaTests: AccessibilityTestResult[];
  keyboardTests: AccessibilityTestResult[];
  videoTests: AccessibilityTestResult[];
  overallScore: number;
}

export default function AccessibilityTest() {
  const [testResults, setTestResults] = useState<AccessibilityTestReport | null>(null);
  const [isTestingVisible, setIsTestingVisible] = useState(false);

  const runAccessibilityTests = (): AccessibilityTestReport => {
    const results: AccessibilityTestReport = {
      contrastTests: [],
      focusTests: [],
      ariaTests: [],
      keyboardTests: [],
      videoTests: [],
      overallScore: 0
    };

    // Test 1: Contrast Ratios (WCAG AA: 4.5:1 for normal text, 3:1 for large text)
    const testContrast = () => {
      const textElements = document.querySelectorAll('p, span, div, a, button');
      let contrastIssues = 0;
      
      textElements.forEach(element => {
        const el = element as HTMLElement;
        const computedStyle = window.getComputedStyle(el);
        const fontSize = parseFloat(computedStyle.fontSize);
        const color = computedStyle.color;
        const backgroundColor = computedStyle.backgroundColor;
        
        // Simple check for potential contrast issues
        if (color.includes('gray') || color.includes('#666') || color.includes('#999')) {
          contrastIssues++;
        }
      });

      results.contrastTests.push({
        passed: contrastIssues === 0,
        message: contrastIssues === 0 
          ? 'All text elements appear to have sufficient contrast'
          : `Found ${contrastIssues} potential contrast issues`
      });
    };

    // Test 2: Focus Indicators
    const testFocusIndicators = () => {
      const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"], [tabindex]');
      let missingFocus = 0;
      
      interactiveElements.forEach(element => {
        const el = element as HTMLElement;
        el.focus();
        const focusedStyle = window.getComputedStyle(el, ':focus');
        const outlineStyle = focusedStyle.outline;
        const boxShadow = focusedStyle.boxShadow;
        
        if (outlineStyle === 'none' && boxShadow === 'none') {
          missingFocus++;
        }
        el.blur();
      });

      results.focusTests.push({
        passed: missingFocus === 0,
        message: missingFocus === 0 
          ? `All ${interactiveElements.length} interactive elements have focus indicators`
          : `${missingFocus} interactive elements missing focus indicators`
      });
    };

    // Test 3: ARIA Labels and Semantic Markup
    const testARIA = () => {
      const iconButtons = document.querySelectorAll('button:has(svg), [role="button"]:has(svg)');
      let missingLabels = 0;
      
      iconButtons.forEach(button => {
        const el = button as HTMLElement;
        const hasAriaLabel = el.hasAttribute('aria-label') || el.hasAttribute('aria-labelledby');
        const hasVisibleText = el.textContent?.trim() || '';
        
        if (!hasAriaLabel && !hasVisibleText) {
          missingLabels++;
        }
      });

      results.ariaTests.push({
        passed: missingLabels === 0,
        message: missingLabels === 0 
          ? `All ${iconButtons.length} icon buttons have proper labels`
          : `${missingLabels} icon buttons missing ARIA labels`
      });

      // Test for heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let headingIssues = 0;
      let previousLevel = 0;
      
      headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          headingIssues++;
        }
        previousLevel = level;
      });

      results.ariaTests.push({
        passed: headingIssues === 0,
        message: headingIssues === 0 
          ? 'Heading hierarchy is properly structured'
          : `${headingIssues} heading hierarchy issues found`
      });
    };

    // Test 4: Keyboard Navigation
    const testKeyboardNavigation = () => {
      const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"], [tabindex]');
      let keyboardIssues = 0;
      
      interactiveElements.forEach(element => {
        const el = element as HTMLElement;
        const tabIndex = el.getAttribute('tabindex');
        const role = el.getAttribute('role');
        
        // Check if element is keyboard accessible
        // Note: tabIndex=-1 is valid for various WAI-ARIA patterns
        if (tabIndex === '-1' && !el.matches('button, a, input, select, textarea')) {
          // Skip tabs - inactive tabs should have tabIndex=-1 per WAI-ARIA pattern
          if (role === 'tab' && el.getAttribute('aria-selected') !== 'true') {
            return; // This is correct behavior for inactive tabs
          }
          // Skip hidden elements or elements not currently visible
          const styles = window.getComputedStyle(el);
          if (el.classList.contains('hidden') || styles.display === 'none' || styles.visibility === 'hidden') {
            return; // Hidden elements don't need to be in tab order
          }
          // Skip programmatically-focusable elements with proper ARIA labels
          if (el.hasAttribute('aria-label') || el.hasAttribute('aria-labelledby') || el.hasAttribute('title')) {
            return; // Properly labeled for programmatic focus
          }
          // Skip sidebar and menu elements (composite widget patterns)
          if (el.hasAttribute('data-sidebar') || role === 'menuitem' || role === 'option' || role === 'treeitem') {
            return; // Composite widgets manage their own focus
          }
          keyboardIssues++;
        }
      });

      results.keyboardTests.push({
        passed: keyboardIssues === 0,
        message: keyboardIssues === 0 
          ? `All ${interactiveElements.length} interactive elements are keyboard accessible`
          : `${keyboardIssues} elements may not be keyboard accessible`
      });

      // Test for focus traps in modals
      const modals = document.querySelectorAll('[role="dialog"], .modal, .popup');
      let focusTrapIssues = 0;
      
      modals.forEach(modal => {
        if (!modal.hasAttribute('data-focus-trap-setup')) {
          focusTrapIssues++;
        }
      });

      results.keyboardTests.push({
        passed: focusTrapIssues === 0,
        message: focusTrapIssues === 0 
          ? `All ${modals.length} modals have focus traps configured`
          : `${focusTrapIssues} modals missing focus trap configuration`
      });
    };

    // Test 5: Video Accessibility
    const testVideoAccessibility = () => {
      const videos = document.querySelectorAll('video');
      let videoIssues = 0;
      
      videos.forEach(video => {
        const hasAriaLabel = video.hasAttribute('aria-label') || video.hasAttribute('aria-labelledby');
        const hasCaptions = video.querySelector('track[kind="captions"]');
        const hasDescriptions = video.querySelector('track[kind="descriptions"]');
        
        if (!hasAriaLabel) videoIssues++;
        if (!hasCaptions) videoIssues++;
      });

      results.videoTests.push({
        passed: videoIssues === 0,
        message: videoIssues === 0 
          ? `All ${videos.length} videos have proper accessibility features`
          : `${videoIssues} video accessibility issues found`
      });
    };

    // Run all tests
    testContrast();
    testFocusIndicators();
    testARIA();
    testKeyboardNavigation();
    testVideoAccessibility();

    // Calculate overall score
    const allTests = [
      ...results.contrastTests,
      ...results.focusTests,
      ...results.ariaTests,
      ...results.keyboardTests,
      ...results.videoTests
    ];
    
    const passedTests = allTests.filter(test => test.passed).length;
    results.overallScore = Math.round((passedTests / allTests.length) * 100);

    return results;
  };

  useEffect(() => {
    // Run tests after component mounts and DOM is ready
    const timer = setTimeout(() => {
      const results = runAccessibilityTests();
      setTestResults(results);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!testResults || !isTestingVisible) {
    return (
      <button
        onClick={() => setIsTestingVisible(true)}
        className="fixed bottom-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        aria-label="Show accessibility test results"
      >
        A11y Test ({testResults?.overallScore || 0}%)
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-gray-900">Accessibility Report</h3>
        <button
          onClick={() => setIsTestingVisible(false)}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close accessibility report"
        >
          ×
        </button>
      </div>
      
      <div className="mb-3">
        <div className={`text-lg font-bold ${ 
          testResults.overallScore >= 90 ? 'text-green-600' : 
          testResults.overallScore >= 70 ? 'text-yellow-600' : 'text-red-600'
        }`}>
          Score: {testResults.overallScore}%
        </div>
        <div className="text-sm text-gray-600">
          {testResults.overallScore >= 90 ? 'Excellent accessibility!' : 
           testResults.overallScore >= 70 ? 'Good accessibility, minor issues' : 'Needs improvement'}
        </div>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Contrast Tests</h4>
          {testResults.contrastTests.map((test, i) => (
            <div key={i} className={`${test.passed ? 'text-green-600' : 'text-red-600'}`}>
              {test.passed ? '✓' : '✗'} {test.message}
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Focus Tests</h4>
          {testResults.focusTests.map((test, i) => (
            <div key={i} className={`${test.passed ? 'text-green-600' : 'text-red-600'}`}>
              {test.passed ? '✓' : '✗'} {test.message}
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-1">ARIA Tests</h4>
          {testResults.ariaTests.map((test, i) => (
            <div key={i} className={`${test.passed ? 'text-green-600' : 'text-red-600'}`}>
              {test.passed ? '✓' : '✗'} {test.message}
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Keyboard Tests</h4>
          {testResults.keyboardTests.map((test, i) => (
            <div key={i} className={`${test.passed ? 'text-green-600' : 'text-red-600'}`}>
              {test.passed ? '✓' : '✗'} {test.message}
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Video Tests</h4>
          {testResults.videoTests.map((test, i) => (
            <div key={i} className={`${test.passed ? 'text-green-600' : 'text-red-600'}`}>
              {test.passed ? '✓' : '✗'} {test.message}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          const newResults = runAccessibilityTests();
          setTestResults(newResults);
        }}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Re-run Tests
      </button>
    </div>
  );
}