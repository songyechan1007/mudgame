package org.syc.dto;

import org.syc.dto.Criteria;

public class PageDTO {
		// 시작페이지
		private int startPage;
		// 끝페이지
		private int endPage;
		// 이전
		private boolean prev;
		// 다음
		private boolean next;
		//전체 건수
		private int total;
		// pagedto클래스에 criteria 클래스를 포함 시켜 저장하고자 하는 변수 선언
		private Criteria cri = new Criteria();
		
		public Criteria getCri() {
			return cri;
		}
		public void setCri(Criteria cri) {
			this.cri = cri;
		}
		public int getStartPage() {
			return startPage;
		}
		public void setStartPage(int startPage) {
			this.startPage = startPage;
		}
		public int getEndPage() {
			return endPage;
		}
		public void setEndPage(int endPage) {
			this.endPage = endPage;
		}
		public boolean isPrev() {
			return prev;
		}
		public void setPrev(boolean prev) {
			this.prev = prev;
		}
		public boolean isNext() {
			return next;
		}
		public void setNext(boolean next) {
			this.next = next;
		}
		public int getTotal() {
			return total;
		}
		public void setTotal(int total) {
			this.total = total;
		}
		
		public PageDTO(Criteria cri, int total) {
			this.cri= cri;
			this.total= total;
							//사용자가 선택한 페이지번호
			this.endPage = (int)(Math.ceil(cri.getPagenum() / 10.0)) * 10;
			this.startPage = this.endPage - 9;
							//전체건수/한페이지 당 게시판 갯수
			int realEnd = (int)(Math.ceil((total*1.0)/cri.getAmount()));
			// endPage 변수에 저장되어있는 값 보다 realEnd 값이 더 작으면
			if (realEnd < this.endPage) {
				// realEnd값을 endPage 변수에 저장 
				this.endPage = realEnd;
			}
			
			// 이전, 다음 버튼 어떤식 처리
			// 이전
			this.prev = this.startPage > 1;
			// 다음
			this.next = this.endPage < realEnd;
		}
	}
