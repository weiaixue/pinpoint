import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'pp-syntax-highlight-popup',
    templateUrl: './syntax-highlight-popup.component.html',
    styleUrls: ['./syntax-highlight-popup.component.css']
})
export class SyntaxHighlightPopupComponent implements OnInit {
    @Input() data: ISyntaxHighlightData;
    @Output() outClosePopup = new EventEmitter<void>();
    @HostBinding('class.font-opensans') fontFamily = true;

    constructor(
        private clipboardService: ClipboardService
    ) {}
    ngOnInit() {}
    onCopyOriginalContents() {
        this.clipboardService.copyFromContent(this.data.originalContents);
    }
    onCopyBindedContents() {
        this.clipboardService.copyFromContent(this.data.bindedContents);
    }
    onCopyBindValue() {
        this.clipboardService.copyFromContent(this.data.bindValue);
    }
    onClose() {
        this.outClosePopup.emit();
    }
    hasBind(): boolean {
        return !!this.data.bindValue;
    }
}
