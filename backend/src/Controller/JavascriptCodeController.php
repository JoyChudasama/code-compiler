<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

#[Route('/api/javascript_code')]
class JavascriptCodeController extends AbstractController
{

    #[Route('/run', name: 'app_api_javascript_code_run', methods: ['GET', 'POST'])]
    public function run(Request $request, HttpClientInterface $httpClientInterface): JsonResponse
    {
        $requestBody = $request->toArray();
        $code = $requestBody['code'];

        try {
            
            $response = $httpClientInterface->request('POST', 'http://127.0.0.1:3000/run', [
                'json' => ['code' => $code]
            ]);

            $output = $response->getContent();

            return $this->json(['data' => $output]);
        
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], 500);
        }


        return $this->json($code);
    }
}
